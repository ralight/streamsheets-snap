"use strict";
const querystring = require('querystring');
const url = require('url');
const fns = {
    getUserFromWebsocketRequest(request, tokenKey, tokenParser) {
        const reqUrl = request.url;
        const token = querystring.parse(url.parse(reqUrl).query)[tokenKey];
        return tokenParser(token);
    }
};
module.exports = fns;
//# sourceMappingURL=index.js.map