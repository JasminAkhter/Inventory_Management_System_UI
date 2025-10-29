export interface ItemReceive {
    id: number;
    chalanNo?: string;
    supplierCompanyID?: string;
    itemID?: string;
    purchasePrice?: number;
    totalPurchasePrice?: number;
    salesPrice?: number;
    totalSalesPrice?: number;
    wholeSalesPrice?: number;
    discountPercent?: number;
    tradePrice?: number;
    profitPercent?: number;
    profitAmt?: number;
    receiveDate?: string;
    receiveQTY?: number;
    totalRecQty?: number;
    totalAmount?: number;
    itemInfo?: string;
    createBy?: string;
    createDate?: string;
    updateBy?: string;
    updateDate?: string;
    memoNo?: string;
}
