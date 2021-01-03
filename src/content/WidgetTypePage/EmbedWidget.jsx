import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import injectExternalDependencies from './injectExternalDependencies';
import injectWidgetRuntime from './injectWidgetRuntime';

import { InlineLoading } from 'carbon-components-react';

const EmbedWidget = ({ widget, doLoad, moreProps }) => {
  // This is not strictly necessary, but it is state.
  const [depsLoaded, setDepsLoaded] = useState(false);
  // Create a unique HTML id for each widget embedding.
  const htmlId = `widget-id--${widget.shortcode}--${JSON.stringify(moreProps)
    .split('')
    .reduce((res, char) => res + char.charCodeAt(0), 0)}`;
  const emptyWidget = (
    <div id={htmlId} {...moreProps}>
      <InlineLoading />
    </div>
  );

  // Let's inject the external dependencies ASAP.
  useEffect(() => {
    if (!depsLoaded) {
      injectExternalDependencies(widget).then(() => setDepsLoaded(true));
    }
  });
  if (!doLoad) {
    return emptyWidget;
  }
  injectWidgetRuntime(widget, htmlId);
  return emptyWidget;
};

EmbedWidget.propTypes = {
  widget: PropTypes.object.isRequired,
  doLoad: PropTypes.bool,
  moreProps: PropTypes.object,
};

export default EmbedWidget;
