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
import { ErrorField, TaxData } from '../interface/submitinterface';
import { SubmitService } from '../service/submitservice';
import { Router } from '@angular/router';
import { alertErrorMessage, alertMessage } from '../util/alertmessage';

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
    CommonModule
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

  errorCheck: ErrorField = {
    errFilingType: true,
    errMonth: true,
    errYear: true,
    errSaleAmount: true,
    errTaxAmount: true,
  }

  addCheck: boolean = false;
  editVat?: number = 0;
  contant: number = 200;

  key?: string

  constructor(private submitService: SubmitService, private router: Router) { }

  onFilingChange(data: any) {
    this.key = data.key;
    this.data.filingType = data.label;
    this.data.surcharge = data.surcharge;
    this.data.penalty = data.penalty;
    this.addCheck = this.key === '1' ? true : false;
    this.errorCheck.errFilingType = !!this.data.filingType;
  }

  onMonthSelected(month: string) {
    this.data.month = month;
    this.errorCheck.errMonth = !!month;
  }

  onYearSelected(year: string) {
    this.data.year = year;
    this.errorCheck.errYear = !!year;
  }

  onSaleAmountChange(value: number) {
    this.data.saleAmount = parseFloat(value.toFixed(2)) ?? 0;
    this.errorCheck.errSaleAmount = this.data.saleAmount > 0;

    this.editVat = this.submitService.calculateVat(this.data.saleAmount) ?? 0;
    this.data.taxAmount = parseFloat(this.editVat.toFixed(2));;
    this.errorCheck.errTaxAmount = !!this.data.taxAmount;
    this.onAdditionalData();
  }

  onVatInput(value: number) {
    const taxData = this.editVat ?? 0;

    if (value < taxData - 20 || value > taxData + 20) {
      this.errorCheck.errTaxAmount = false;
      return;
    }

    this.errorCheck.errTaxAmount = true;
    this.data.taxAmount = parseFloat(value.toFixed(2));;

    this.onAdditionalData()
  }


  onAdditionalData() {
    if (this.key === '1' && this.data.taxAmount != null && this.data.taxAmount > 0) {
      const total = this.data.taxAmount * 0.1;
      const data = parseFloat(total.toFixed(2));
      this.data.surcharge = data;

      this.data.penalty = parseFloat(this.contant.toFixed(2))
      this.data.totalAmount = this.submitService.sumTotal(this.data.taxAmount, this.data.surcharge, this.data.penalty)
    } else {
      this.data.surcharge = 0;
      this.data.penalty = 0;
      this.data.totalAmount = 0;
    }
  }


  onNext() {

    if (!this.data.filingType) this.errorCheck.errFilingType = false;
    if (!this.data.month) this.errorCheck.errMonth = false;
    if (!this.data.year) this.errorCheck.errYear = false;
    if (!this.data.saleAmount) this.errorCheck.errSaleAmount = false;
    if (!this.data.taxAmount) this.errorCheck.errTaxAmount = false;

    const hasError = Object.values(this.errorCheck).some(v => v === false);

    if (hasError) {
      alertErrorMessage();
      return;
    }

    this.router.navigate(['/confirm-review'], { state: { taxData: this.data } });
    console.log(this.data)
    alertMessage();
  }

  goBack() {
    this.router.navigate(['/input-detail']);
  }

}
