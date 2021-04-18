"use strict";
const CONFIG = require('../../config').get('app');
module.exports = class ConfigRoutes {
    static async config(request, response) {
        response.status(200).json(CONFIG);
    }
};
//# sourceMappingURL=ConfigRoutes.js.map