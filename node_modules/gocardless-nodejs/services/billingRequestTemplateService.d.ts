import * as Types from '../types/Types';
interface BillingRequestTemplateResponse extends Types.BillingRequestTemplate, Types.APIResponse {
}
interface BillingRequestTemplateListResponse extends Types.APIResponse {
    billing_request_templates: Types.BillingRequestTemplate[];
    meta: Types.ListMeta;
}
interface BillingRequestTemplateListRequest {
    after?: string;
    before?: string;
    limit?: string;
}
interface BillingRequestTemplateCreateRequest {
    links?: Types.BillingRequestTemplateCreateRequestLinks;
    mandate_request_currency?: string;
    mandate_request_description?: string;
    mandate_request_metadata?: Types.JsonMap;
    mandate_request_scheme?: string;
    mandate_request_verify?: Types.BillingRequestTemplateMandateRequestVerify;
    metadata?: Types.JsonMap;
    name?: string;
    payment_request_amount?: string;
    payment_request_currency?: string;
    payment_request_description?: string;
    payment_request_metadata?: Types.JsonMap;
    payment_request_scheme?: string;
    redirect_uri?: string;
}
interface BillingRequestTemplateUpdateRequest {
    mandate_request_currency?: string;
    mandate_request_description?: string;
    mandate_request_metadata?: Types.JsonMap;
    mandate_request_scheme?: string;
    mandate_request_verify?: Types.BillingRequestTemplateMandateRequestVerify;
    metadata?: Types.JsonMap;
    name?: string;
    payment_request_amount?: string;
    payment_request_currency?: string;
    payment_request_description?: string;
    payment_request_metadata?: Types.JsonMap;
    payment_request_scheme?: string;
    redirect_uri?: string;
}
export declare class BillingRequestTemplateService {
    private api;
    constructor(api: any);
    list(requestParameters: BillingRequestTemplateListRequest): Promise<BillingRequestTemplateListResponse>;
    all(requestParameters: BillingRequestTemplateListRequest): AsyncGenerator<Types.BillingRequestTemplate, void, unknown>;
    find(identity: string): Promise<BillingRequestTemplateResponse>;
    create(requestParameters: BillingRequestTemplateCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<BillingRequestTemplateResponse>;
    update(identity: string, requestParameters: BillingRequestTemplateUpdateRequest): Promise<BillingRequestTemplateResponse>;
}
export {};
