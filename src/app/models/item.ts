export interface Item {
    item_Id: string;             
    itemName: string;            
    categoryID?: string;         
    modelID?: string;            
    brandID?: string;            
    sizeID?: string;             
    colorID?: string;            
    uomID?: string;              
    supplierCompanyID?: string;  
    productBarcode?: string;     
    barCode1?: string;           
    barcode2?: string;           
    purchasePrice?: number;      
    salesPrice?: number;         
    wholeSalesPrice?: number;    
    discountPersent?: number;    
    tradePrice?: number;         
    profitPersent?: number;      
    profitAmt?: number;          
    createBy?: string;          
    createDate?: string;         
    updateBy?: string;          
    updateDate?: string;         
    inActive?: boolean;          
    openingStock?: number;       
    minimumAlertQty?: number;    
}


