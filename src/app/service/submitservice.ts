import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class SubmitService{

  calculateVat(total:number | undefined){
    if(!total) return;
    let vat = total*0.07;
    return vat;
  }

  sumTotal(tax:number,surcharge:number,penalty:number){
    if(!tax||!surcharge||!penalty) return;
    let total = tax+surcharge+penalty;
    return total;
  }
}
