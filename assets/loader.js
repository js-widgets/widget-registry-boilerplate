/*global window, document*/
(function (context) {
  document.loadWidget = function (widget) {
    var renderFunctionName = widget.renderFunctionName;
    var instanceId = widget.instanceId;
    var language = widget.language;
    var onRenderFinish = widget.onRenderFinish;
    var origin = widget.origin || context.location.origin;
    if (typeof document.addEventListener !== 'function') {
      return;
    }
    try {
      document.addEventListener('DOMContentLoaded', () => {
        if (typeof context[renderFunctionName] !== 'function') {
          return;
        }
        context[renderFunctionName](
          instanceId,
          language,
          origin,
          onRenderFinish,
        );
      });
    } catch (err) {
      console.error(err.message());
    }
  };
  document.loadWidgets = function (widgets) {
    if (!Array.isArray(widgets)) {
      return;
    }
    widgets.forEach(document.loadWidget);
  };
})(window);
