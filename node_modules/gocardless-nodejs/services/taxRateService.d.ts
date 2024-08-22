import * as Types from '../types/Types';
interface TaxRateResponse extends Types.TaxRate, Types.APIResponse {
}
interface TaxRateListResponse extends Types.APIResponse {
    tax_rates: Types.TaxRate[];
    meta: Types.ListMeta;
}
interface TaxRateListRequest {
    after?: string;
    before?: string;
    jurisdiction?: string;
    limit?: string;
}
export declare class TaxRateService {
    private api;
    constructor(api: any);
    list(requestParameters: TaxRateListRequest): Promise<TaxRateListResponse>;
    all(requestParameters: TaxRateListRequest): AsyncGenerator<Types.TaxRate, void, unknown>;
    find(identity: string): Promise<TaxRateResponse>;
}
export {};
