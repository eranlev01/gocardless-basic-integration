import * as Types from '../types/Types';
interface InstitutionListResponse extends Types.APIResponse {
    institutions: Types.Institution[];
    meta: Types.ListMeta;
}
interface InstitutionListRequest {
    country_code?: string;
}
interface InstitutionListForBillingRequestRequest {
    country_code: string;
    ids?: string[];
    search?: string;
}
export declare class InstitutionService {
    private api;
    constructor(api: any);
    list(requestParameters: InstitutionListRequest): Promise<InstitutionListResponse>;
    list_for_billing_request(requestParameters: InstitutionListForBillingRequestRequest): Promise<InstitutionListResponse>;
}
export {};
