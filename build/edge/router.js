// build/edge/static.js
var static_default = ["/_app/immutable/assets/_layout-825fcdcc.css", "/_app/immutable/chunks/0-4e670373.js", "/_app/immutable/chunks/1-b731f94a.js", "/_app/immutable/chunks/2-fab14597.js", "/_app/immutable/chunks/3-d0fd4a87.js", "/_app/immutable/chunks/4-ec70ee9f.js", "/_app/immutable/chunks/_api-fe96f288.js", "/_app/immutable/chunks/index-b263ceb1.js", "/_app/immutable/chunks/index-dcb8a677.js", "/_app/immutable/chunks/singletons-b606c91e.js", "/_app/immutable/chunks/stores-fa19e2e8.js", "/_app/immutable/components/error.svelte-61607ab4.js", "/_app/immutable/components/pages/_layout.svelte-55f87ee4.js", "/_app/immutable/components/pages/_page.svelte-f4f7171f.js", "/_app/immutable/components/pages/login/_page.svelte-d806c33f.js", "/_app/immutable/components/pages/signup/_page.svelte-079ff659.js", "/_app/immutable/start-c721e1be.js", "/_app/version.json", "/favicon.png", "/vite-manifest.json"];

// build/edge/_router.js
"use strict";
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  if (request.method !== "GET") {
    callback(null, request);
    return;
  }
  let uri = request.uri;
  if (!uri.includes(".") && uri.slice(-1) !== "/") {
    uri += "/";
  }
  if (uri.slice(-1) === "/") {
    uri += "index.html";
  }
  if (static_default.includes(uri)) {
    request.uri = uri;
    const domainName = request.origin.custom.customHeaders["s3-host"][0].value;
    request.origin.custom.domainName = domainName;
    request.origin.custom.path = "";
    request.headers["host"] = [{key: "host", value: domainName}];
  }
  callback(null, request);
};
