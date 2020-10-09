# Widget Registry Boilerplate

## Getting started

1. On the [widget-registry-boilerplate](https://github.com/js-widgets/widget-registry-boilerplate) project page click the **"Use this template"** button to setup a new widget.
2. Give the new repository a **name** and a **description** and then click the "**Create repository from template**" button.
3. Clone the new repository and change the project [**name**](https://github.com/js-widgets/widget-registry-boilerplate/blob/master/package.json#L2) inside **package.json**.
4. Install the project dependencies using `npm install`.
5. Rename the `master` (or `main`) branch to `sandbox` and create another branch, copy of it, with name `production`.

## Continuous Integration

Testing and deployment scripts available inside this example repository using [GitHub Actions](https://github.com/features/actions).

This project incorporates the CI scripts for an opinionated development workflow. All you need to do is alter `metadata/registry.json` and merge the changes to the `sandbox` branch or `production` branch.

## Publish a widget
This page describes the process to publish a new widget on the registry, or a new version for an existent widget.

### Create a new release of the widget

Once the widget code is stable, you need to create a release on GitHub. Alternatively you can upload a `.tar.gz` of the widget project (without the `node_modules`) to any location. Please check the documentation in the [Example Widget repository](https://github.com/js-widgets/example-widget) for more details. 

### Register a front-end JavaScript application
The only input in the Widget Registry is the `/metadata/registry.json`. This contains an array of objets. Each object has the necessary metadata to compile a widget:

  1. The `shortcode` or machine name of the widget. This is the widget identifier.
  1. The `version` that needs to be published. Once the widget has been published for the first time, it is likely that this is the only parameter that needs to be tweaked (via a Pull Request to your own widget registry project) to publish a new release of the JS app.
  1. The `repositoryUrl` or `tarballUrl`. If you are hosting your JS app in GitHub and you are using [GitHub Releases](https://developer.github.com/v3/repos/releases) you can set `repositoryUrl` and be done. The compiler will know how to locate and download your application's `.tar.gz` tarball. If you are hosting your application releases differently, you will need to use the `tarballUrl` property to specify where to download the `.tar.gz` for this version of your application.

#### If you have your JS app releases in another place
The `tarballUrl` has you covered, but you might want to automate the computation of the tarballUrl. If you want to provide support for other technologies (GitLab releases, particular naming conventions, etc.) you can write a plugin [like](https://github.com/js-widgets/js-widgets/tree/master/packages/js-widgets-ingestion-gh-releases) [these](https://github.com/js-widgets/js-widgets/tree/master/packages/js-widgets-ingestion-tarball).

You will need to determine a new property (ex: `gitlabRepo`) and implement the logic to determine the URL to the tarball.

You can keep these plugins to yourself, but if you think it can benefit others we encourage you to [contribute](https://github.com/js-widgets/js-widgets/blob/master/CONTRIBUTE.md) it!

### Upgrading an existent widget to a new version
In order to publish a widget to the registry you can create a Pull Request to with the updated
version of the widget on `metadata/registry.json`. Upon merge of the pull request, the GitHub
Actions CI script will compile the updated widgets and upload the result to the appropriate
registry. The appropriate registry will be determined depending on what branch the pull request was
merged onto (`sandbox` or `production`).

A pull request to update the `registry.json` will typically look like:

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

## Accessing your widget on the registry

When the CI job completes successfully, the new release for your widget should be available on GitHub Pages.

If you want to include the widget to your site, use the CMS integrations like [Drupal](https://drupal.org/project/widget_instance).

Alternatively, you can include it on your site manually for local testing:

1. Open the [`registry.json`](http://js-widgets.github.io/widget/widget-registry/sandbox/registry.json) from the registry and locate the JSON object related to your widget.
2. Using the value of the `directoryUrl` attribute, append `/js/main.js` to it. For example:
```
http://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1/js/main.js
```
3. Finally, add a new `<script>` tag on your HTML to load the previous URL.

You can see this in action, and the [html markup](https://github.com/js-widgets/example-widget/blob/master/public/index.html), in the [demo page](https://js-widgets.github.io/example-widget/index.html) of the example widget.
