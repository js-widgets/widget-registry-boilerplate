import renderWidget from './renderWidget';

export default function (widget, htmlId) {
  const elementId = `widget-type-${widget.shortcode}-runtime-code`;
  if (document.getElementById(elementId)) {
    return Promise.resolve().then(() => renderWidget(widget, htmlId));
  }
  const assetPromises = [
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.id = elementId;
      script.src = `${widget.directoryUrl}/js/main.js`;
      script.crossorigin = 'anonymous';
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    }),
  ];
  if (widget.files.includes('css/main.css')) {
    assetPromises.push(
      new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.crossOrigin = 'anonymous';
        link.type = 'text/css';
        link.media = 'all';
        link.rel = 'stylesheet';
        link.href = `${widget.directoryUrl}/css/main.css`;
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
      }),
    );
  }
  return Promise.all(assetPromises).then(() => renderWidget(widget, htmlId));
}
