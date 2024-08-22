'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
class PaymentService {
    constructor(api) {
        this.api = api;
    }
    async create(requestParameters, idempotencyKey = '', customHeaders = {}) {
        var _a, _b;
        const urlParameters = [];
        const requestParams = {
            path: '/payments',
            method: 'post',
            urlParameters,
            requestParameters,
            payloadKey: 'payments',
            idempotencyKey,
            customHeaders,
            fetch: async (identity) => this.find(identity),
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...((_b = (_a = response.body) === null || _a === void 0 ? void 0 : _a['payments']) !== null && _b !== void 0 ? _b : response),
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async list(requestParameters) {
        const urlParameters = [];
        const requestParams = {
            path: '/payments',
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
            for (const payment of list.payments) {
                yield payment;
            }
            cursor = list.meta.cursors.after;
        } while (cursor);
    }
    async find(identity) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/payments/:identity',
            method: 'get',
            urlParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['payments'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async update(identity, requestParameters) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/payments/:identity',
            method: 'put',
            urlParameters,
            requestParameters,
            payloadKey: 'payments',
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['payments'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async cancel(identity, requestParameters) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/payments/:identity/actions/cancel',
            method: 'post',
            urlParameters,
            requestParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['payments'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
    async retry(identity, requestParameters) {
        const urlParameters = [{ key: 'identity', value: identity }];
        const requestParams = {
            path: '/payments/:identity/actions/retry',
            method: 'post',
            urlParameters,
            requestParameters,
            payloadKey: null,
            fetch: null,
        };
        const response = await this.api.request(requestParams);
        const formattedResponse = {
            ...response.body['payments'],
            __response__: response.__response__,
        };
        return formattedResponse;
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=paymentService.js.map