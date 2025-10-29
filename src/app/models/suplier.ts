export interface Suplier {
    supplierCompanyID: string;
    supplierCompanyName: string;
    address?: string;
    phone?: string;
    mobile?: string;
    fax?: string;
    createDate?: string;
    createBy?: string;
    updateBy?: string;
    updateDate?: string;
    logo?: Uint8Array;
    isCashBack?: boolean;
    openingAmt?: number;
}
