"use strict";
const httpError = require('http-errors');
const axios = require('axios');
const logger = require('../../utils/logger').create({ name: 'Newsletter' });
const URL = 'https://api.cedalo.cloud/rest/api/v1.0/newsletter/subscribe';
module.exports = class NewsletterRoutes {
    static subscribe(request, response, next) {
        switch (request.method) {
            case 'POST': {
                const user = request.body;
                axios
                    .post(URL, user)
                    .then(() => {
                    response.status(200).json({
                        newsletter: true
                    });
                })
                    .catch((error) => {
                    logger.error('Error when trying to subscribe for newsletter.');
                    logger.error(error);
                });
                break;
            }
            default:
                response.set('allow', 'GET', 'POST');
                next(new httpError.MethodNotAllowed());
                break;
        }
    }
};
//# sourceMappingURL=NewsletterRoutes.js.map