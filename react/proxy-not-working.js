// Sometimes if proxy is not working properly we can use the old method of
// proxiying.
// In the package.json instead of putting "proxy":"http://localhost:3030"
// we can put the following

"proxy": {
    "/api": { //The beginning of requests we want to proxy
      "target": "http://localhost:3030", //The port we want to proxy to.
      "ws": true
    },
    "/auth": { //The beginning of requests we want to proxy
      "target": "http://localhost:3030", //The port we want to proxy to.
      "ws": true
    }
  }

// This will route any traffic that starts with /api or /auth to the backend for us.
// I'm not sure what's causing the proxy to not work for some users.
