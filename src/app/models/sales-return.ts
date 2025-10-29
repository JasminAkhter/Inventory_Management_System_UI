export interface SalesReturn {
    id: number;
    returnInvoiceNo?: string;
    invoiceNo?: string;
    returnDate?: string;
    itemID?: string;
    customerID?: string;
    rQty?: number;
    salesQty?: number;
    salesPrice?: number;
    totalTotalPrice?: number;
    vat?: number;
    netAmount?: number;
    returnAmount?: number;
    customerPayment?: number;
    createBy?: string;
    createDate?: string;
}
