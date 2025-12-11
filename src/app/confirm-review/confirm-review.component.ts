import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaxData } from '../interface/submitinterface';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-confirm-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './confirm-review.component.html',
  styleUrl: './confirm-review.component.css'
})
export class ConfirmReviewComponent {
  @ViewChild('taxDataModal') modalRef!: ElementRef;
  private bsModal!: any;
  taxData?: TaxData;
  taxDataJson: string = '';

  constructor(private router: Router) {
    const data = this.router.getCurrentNavigation();
    this.taxData = data?.extras.state?.['taxData'];
    console.log('Received taxData:', this.taxData);
  }

  ngAfterViewInit() {
    this.bsModal = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  onSubmit() {
    if (!this.taxData) return;
    this.taxDataJson = JSON.stringify(this.taxData, null, 2);
    this.bsModal.show();
  }

  goBack() {
    this.router.navigate(['/input-detail']);
  }
}
