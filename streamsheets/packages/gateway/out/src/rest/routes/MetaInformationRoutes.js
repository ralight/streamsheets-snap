"use strict";
const httpError = require('http-errors');
module.exports = class MetaInformationRoutes {
    static async getMetaInformation(request, response, next) {
        const { app, headers } = request;
        const { gatewayService } = app.locals;
        switch (request.method) {
            case 'GET': {
                const metaInfo = await gatewayService.getMetaInfo({ id: headers.scope });
                response.status(200).json(metaInfo);
                break;
            }
            default:
                response.set('allow', 'GET');
                next(new httpError.MethodNotAllowed());
                break;
        }
    }
};
//# sourceMappingURL=MetaInformationRoutes.js.map