export interface CustomerLedger {
    id: number;
    customerId: string;
    challanNo?: string;
    supplierCompanyID?: string;
    customerLedgerNo?: string;
    billAmt?: number;
    payAmt?: number;
    payModeID?: string;
    bankName?: string;
    chk_NO?: string;
    checkDate?: Date;
    reason?: string;
    invoiceNo?: string;
    comments?: string;
    createBy?: string;
    createDate?: Date;
    updateBy?: string;
    updateDate?: Date;
}
