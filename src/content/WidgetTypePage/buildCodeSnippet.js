const buildCodeSnippet = (widget) => {
  const renderFunctionName =
    'render' +
    widget.shortcode
      .split('-')
      .map((str) => `${str[0].toUpperCase()}${str.substr(1)}`)
      .join('');
  const majorVersion = widget.version.split('.')[0];
  return `
<html>
    <!-- ... -->
  <body>
    <!-- ... -->
    <div id="widget-id"></div>
    <!-- ... -->
    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/${widget.shortcode}/${majorVersion}/js/main.js" defer></script>
    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/loader.js" defer></script>
    <script defer>
      document.loadWidget({
        instanceId: "widget-id",
        language: "",
        onRenderFinish: domElement => {},
        origin: "",
        renderFunctionName: "${renderFunctionName}",
      });
    </script>
  </body>
</html>
`;
};

export default buildCodeSnippet;
