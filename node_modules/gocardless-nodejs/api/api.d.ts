import { Environments } from '../constants';
interface APIOptions {
    proxy?: object;
    raiseOnIdempotencyConflict?: boolean;
}
interface UrlParameter {
    key?: string;
    value?: string;
}
interface APIRequestParameters {
    path: string;
    method: string;
    urlParameters?: UrlParameter[];
    requestParameters?: object;
    payloadKey?: string;
    idempotencyKey?: string;
    fetch: Function | null;
    customHeaders?: object;
}
export declare class Api {
    private _token;
    private _environment;
    private _baseUrl;
    private _agent;
    private raiseOnIdempotencyConflict;
    private processVersion;
    private osRelease;
    private osPlatform;
    constructor(token: string, environment: Environments, options: APIOptions);
    request({ path, method, urlParameters, requestParameters, payloadKey, idempotencyKey, customHeaders, fetch, }: APIRequestParameters): Promise<any>;
    private getHeaders;
    private createRequestOptions;
    private getRequestBody;
    private generateIdempotencyKey;
    private formatQueryParameters;
}
export {};
