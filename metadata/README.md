# The `/metadata` directory

This directory contains the input file `registry.json`. In order to publish a widget to the registry
you can create a Pull Request to with the updated version of the widget. Upon merge of the pull
request, the GitHub Actions CI script will compile the updated widgets and upload the result to the
appropriate registry. The appropriate registry will be determined depending on what branch the pull
request was merged onto (`sandbox` or `production`).

A pull request to the `registry.json` will typically look like:

```diff
--- a/metadata/registry.json
+++ b/metadata/registry.json
@@ -2,6 +2,6 @@
   {
     "repositoryUrl": "https://github.com/js-widgets/example-widget",
     "shortcode": "example-widget",
-    "version": "v1.0.0"
+    "version": "v1.1.0"
   }
 ]
```
