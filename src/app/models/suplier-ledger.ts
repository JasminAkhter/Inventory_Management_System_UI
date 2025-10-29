export interface SuplierLedger {
    id: number;
    supplierId?: string;
    challanNo?: string;
    customerLedgerNo?: string;
    billAmt?: number;
    payAmt?: number;
    payModeID?: string;
    amountAdd?: number;
    amountOut?: number;
    bankName?: string;
    chk_NO?: string;
    checkDate?: string; 
    reason?: string;
    invoiceNo?: string;
    comments?: string;
    createBy?: string;
    createDate?: string; 
    updateBy?: string;
    updateDate?: string; 
}
