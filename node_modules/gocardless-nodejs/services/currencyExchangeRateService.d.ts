import * as Types from '../types/Types';
interface CurrencyExchangeRateListResponse extends Types.APIResponse {
    currency_exchange_rates: Types.CurrencyExchangeRate[];
    meta: Types.ListMeta;
}
interface CurrencyExchangeRateListRequest {
    after?: string;
    before?: string;
    limit?: string;
    source?: string;
    target?: string;
}
export declare class CurrencyExchangeRateService {
    private api;
    constructor(api: any);
    list(requestParameters: CurrencyExchangeRateListRequest): Promise<CurrencyExchangeRateListResponse>;
    all(requestParameters: CurrencyExchangeRateListRequest): AsyncGenerator<Types.CurrencyExchangeRate, void, unknown>;
}
export {};
