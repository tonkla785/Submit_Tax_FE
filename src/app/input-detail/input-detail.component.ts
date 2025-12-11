import { Component } from '@angular/core';
import { FilingTypeComponent } from '../component/filing-type/filing-type.component';
import { MonthComponent } from '../component/month/month.component';
import { YearComponent } from '../component/year/year.component';
import { TypeComponent } from '../component/type/type.component';
import { SaleAmountComponent } from '../component/sale-amount/sale-amount.component';
import { TaxAmountComponent } from '../component/tax-amount/tax-amount.component';
import { SurchargeComponent } from '../component/surcharge/surcharge.component';
import { PenaltyComponent } from '../component/penalty/penalty.component';
import { TotalAmountComponent } from '../component/total-amount/total-amount.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaxData } from '../interface/submitinterface';
import { SubmitService } from '../service/submitservice';

@Component({
  selector: 'app-input-detail',
  standalone: true,
  imports: [
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    TypeComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './input-detail.component.html',
  styleUrl: './input-detail.component.css',
})
export class InputDetailComponent {
  data: TaxData = {
    filingType: undefined,
    month: undefined,
    year: undefined,
    saleAmount: undefined,
    taxAmount: undefined,
    surcharge: undefined,
    penalty: undefined,
    totalAmount: undefined,
  };

  checkAdd: boolean = false;

  constructor(private submitService: SubmitService) {}

  onFilingChange(data: any) {
    this.data.filingType = data.typeFiling;
    this.data.surcharge = data.surcharge;
    this.data.penalty = data.penalty;

    this.checkAdd = this.data.filingType === '1' ? true : false;

    if (!this.checkAdd) {
      this.data.surcharge = undefined;
      this.data.penalty = undefined;
    }
  }

  onMonthSelected(month: string) {
    this.data.month = month;
  }

  onYearSelected(year: string) {
    this.data.year = year;
  }

  onSaleAmountChange(value: number) {
    this.data.saleAmount = value;
    this.data.taxAmount = this.submitService.calculateVat(this.data.saleAmount);
  }

  onVatChange(tax: number) {
    this.data.taxAmount = tax;
  }

  // onVatInput(value: number) {
  //   this.vat = value;

  //   if (isNaN(value)) {
  //     this.validVat = false;
  //   } else if (value >= this.taxAmount - 20 && value <= this.taxAmount + 20) {
  //     this.validVat = true;
  //   } else {
  //     this.validVat = false;
  //   }
  // }

  onNext() {
    console.log(this.data);
  }
}
