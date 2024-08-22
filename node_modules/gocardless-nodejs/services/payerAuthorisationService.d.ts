import * as Types from '../types/Types';
interface PayerAuthorisationResponse extends Types.PayerAuthorisation, Types.APIResponse {
}
interface PayerAuthorisationCreateRequest {
    bank_account: Types.PayerAuthorisationBankAccount;
    customer: Types.PayerAuthorisationCustomer;
    mandate: Types.PayerAuthorisationMandate;
}
interface PayerAuthorisationUpdateRequest {
    bank_account: Types.PayerAuthorisationBankAccount;
    customer: Types.PayerAuthorisationCustomer;
    mandate: Types.PayerAuthorisationMandate;
}
export declare class PayerAuthorisationService {
    private api;
    constructor(api: any);
    find(identity: string): Promise<PayerAuthorisationResponse>;
    create(requestParameters: PayerAuthorisationCreateRequest, idempotencyKey?: string, customHeaders?: Types.JsonMap): Promise<PayerAuthorisationResponse>;
    update(identity: string, requestParameters: PayerAuthorisationUpdateRequest): Promise<PayerAuthorisationResponse>;
    submit(identity: string): Promise<PayerAuthorisationResponse>;
    confirm(identity: string): Promise<PayerAuthorisationResponse>;
}
export {};
