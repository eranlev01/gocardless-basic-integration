import * as Types from '../types/Types';
interface BillingRequestResponse extends Types.BillingRequest, Types.APIResponse {
}
interface BillingRequestListResponse extends Types.APIResponse {
    billing_requests: Types.BillingRequest[];
    meta: Types.ListMeta;
}
interface BillingRequestCreateRequest {
    fallback_enabled?: boolean;
    links?: Types.BillingRequestCreateRequestLinks;
    mandate_request?: Types.BillingRequestMandateRequest;
    metadata?: Types.JsonMap;
    payment_request?: Types.BillingRequestPaymentRequest;
    purpose_code?: Types.BillingRequestPurposeCode;
}
interface BillingRequestCollectCustomerDetailsRequest {
    customer?: Types.BillingRequestCustomer;
    customer_billing_detail?: Types.BillingRequestCustomerBillingDetail;
}
interface BillingRequestCollectBankAccountRequest {
    account_holder_name?: string;
    account_number?: string;
    account_number_suffix?: string;
    account_type?: Types.BillingRequestAccountType;
    bank_code?: string;
    branch_code?: string;
    country_code?: string;
    currency?: string;
    iban?: string;
    metadata?: Types.JsonMap;
    pay_id?: string;
}
interface BillingRequestConfirmPayerDetailsRequest {
    metadata?: Types.JsonMap;
    payer_requested_dual_signature?: boolean;
}
interface BillingRequestFulfilRequest {
    metadata?: Types.JsonMap;
}
interface BillingRequestCancelRequest {
    metadata?: Types.JsonMap;
}
interface BillingRequestListRequest {
    after?: string;
    before?: string;
    created_at?: Types.CreatedAtFilter;
    customer?: string;
    limit?: string;
    status?: Types.BillingRequestStatus;
}
interface BillingRequestNotifyRequest {
    notification_type: Types.BillingRequestNotificationType;
    redirect_uri?: string;
}
interface BillingRequestChooseCurrencyRequest {
    currency: string;
    metadata?: Types.JsonMap;
}
interface BillingRequestSelectInstitutionRequest {
    country_code: string;
    institution: string;
}
export declare class BillingRequestService {
    private api;
    constructor(api: any);
    create(requestParameters: BillingRequestCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<BillingRequestResponse>;
    collectCustomerDetails(identity: string, requestParameters: BillingRequestCollectCustomerDetailsRequest): Promise<BillingRequestResponse>;
    collectBankAccount(identity: string, requestParameters: BillingRequestCollectBankAccountRequest): Promise<BillingRequestResponse>;
    confirmPayerDetails(identity: string, requestParameters: BillingRequestConfirmPayerDetailsRequest): Promise<BillingRequestResponse>;
    fulfil(identity: string, requestParameters: BillingRequestFulfilRequest): Promise<BillingRequestResponse>;
    cancel(identity: string, requestParameters: BillingRequestCancelRequest): Promise<BillingRequestResponse>;
    list(requestParameters: BillingRequestListRequest): Promise<BillingRequestListResponse>;
    all(requestParameters: BillingRequestListRequest): AsyncGenerator<Types.BillingRequest, void, unknown>;
    find(identity: string): Promise<BillingRequestResponse>;
    notify(identity: string, requestParameters: BillingRequestNotifyRequest): Promise<BillingRequestResponse>;
    fallback(identity: string): Promise<BillingRequestResponse>;
    chooseCurrency(identity: string, requestParameters: BillingRequestChooseCurrencyRequest): Promise<BillingRequestResponse>;
    selectInstitution(identity: string, requestParameters: BillingRequestSelectInstitutionRequest): Promise<BillingRequestResponse>;
}
export {};
