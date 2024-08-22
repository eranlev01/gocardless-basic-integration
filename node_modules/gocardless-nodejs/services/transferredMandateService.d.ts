import * as Types from '../types/Types';
interface TransferredMandateResponse extends Types.TransferredMandate, Types.APIResponse {
}
export declare class TransferredMandateService {
    private api;
    constructor(api: any);
    find(identity: string): Promise<TransferredMandateResponse>;
}
export {};
