import renderWidget from './renderWidget';

export default function (widget, htmlId) {
  const elementId = `widget-type-${widget.shortcode}-runtime-code`;
  if (document.getElementById(elementId)) {
    return Promise.resolve().then(() => renderWidget(widget, htmlId));
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = elementId;
    script.src = `${widget.directoryUrl}/js/main.js`;
    script.crossorigin = 'anonymous';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  }).then(() => renderWidget(widget, htmlId));
}
