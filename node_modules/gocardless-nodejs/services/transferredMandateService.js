'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferredMandateService = void 0;
class TransferredMandateService {
    constructor(api) {
        this.api = api;
    }
    async find(identity) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/transferred_mandates/:identity',
            method: 'get',
            urlParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['transferred_mandates'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
}
exports.TransferredMandateService = TransferredMandateService;
//# sourceMappingURL=transferredMandateService.js.map