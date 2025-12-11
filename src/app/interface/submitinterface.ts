export interface TaxData {
  filingType?: string;
  month?: string;
  year?: string;
  saleAmount?: number;
  taxAmount?: number;
  surcharge?: number;
  penalty?: number;
  totalAmount?: number;
}

export interface ErrorField{
    errFilingType?: boolean;
    errMonth?: boolean;
    errYear?: boolean;
    errSaleAmount?:boolean;
    errTaxAmount?:boolean;
}