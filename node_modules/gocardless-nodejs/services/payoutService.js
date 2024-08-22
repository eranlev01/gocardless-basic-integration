'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutService = void 0;
class PayoutService {
    constructor(api) {
        this.api = api;
    }
    async list(requestParameters) {
        const urlParameters = [];
        const requestParams = {
            path: '/payouts',
            method: 'get',
            urlParameters,
            requestParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body,
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async *all(requestParameters) {
        let cursor = undefined;
        do {
            const list = await this.list({ ...requestParameters, after: cursor });
            for (const payout of list.payouts) {
                yield payout;
            }
            cursor = list.meta.cursors.after;
        } while (cursor);
    }
    async find(identity) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/payouts/:identity',
            method: 'get',
            urlParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['payouts'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async update(identity, requestParameters) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/payouts/:identity',
            method: 'put',
            urlParameters,
            requestParameters,
            payloadKey: 'payouts',
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['payouts'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
}
exports.PayoutService = PayoutService;
//# sourceMappingURL=payoutService.js.map