'use strict';
const http = require('http');
module.exports = class ErrorRoute {
    static _404(request, response) {
        response.charset = 'utf-8';
        response.status(404);
        response.format({
            'application/json': () => { response.json({ error: http.STATUS_CODES[404] }); },
            default: () => { response.type('text/plain').send(http.STATUS_CODES[404]); }
        });
    }
};
//# sourceMappingURL=ErrorRoutes.js.map