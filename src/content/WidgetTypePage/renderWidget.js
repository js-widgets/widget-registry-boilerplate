export default function (widget, htmlId) {
  const name = widget.shortcode
    .replace(/^([a-z])|-([a-z])/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/-/g, '');
  const renderFunctionName = `render${name}`;
  const renderFunction = window[renderFunctionName];
  const elem = document.getElementById(htmlId);
  if (renderFunction && elem && !elem.getAttribute('rendered')) {
    renderFunction(htmlId, '', '', (domElement) => {
      domElement.setAttribute('rendered', true);
    });
  }
}
