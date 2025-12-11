import { Injectable } from "@angular/core";
import { TaxData } from "../interface/submitinterface";

@Injectable({
  providedIn: 'root',
})

export class SubmitService {
  data: TaxData | undefined;

  setData(d: TaxData) { this.data = d; }

  getData(): TaxData | undefined { return this.data; }

  calculateVat(total: number | undefined) {
    if (!total) return;
    let vat = total * 0.07;
    return parseFloat(vat.toFixed(2));
  }

  sumTotal(tax: number, surcharge: number, penalty: number) {
    if (!tax || !surcharge || !penalty) return;
    let total = tax + surcharge + penalty;
    return parseFloat(total.toFixed(2));
  }
}
