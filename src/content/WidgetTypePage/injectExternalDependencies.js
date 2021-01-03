export default function (widget) {
  const deps = widget.externalPeerDependencies || {};
  const keys = Object.keys(deps);
  if (!keys.length) {
    return Promise.resolve([]);
  }
  return Promise.all(
    keys.map(
      (name) =>
        new Promise((resolve, reject) => {
          const id = `widget-type-runtime-dep--${name}`;
          if (document.getElementById(id)) {
            return resolve(name);
          }
          const script = document.createElement('script');
          script.id = id;
          script.src = deps[name].src;
          script.crossorigin = 'anonymous';
          script.async = false;
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        }),
    ),
  );
}
