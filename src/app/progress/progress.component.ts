import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  currentStep: number = 1;
  currentStepProgress: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setStepFromUrl(this.router.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setStepFromUrl(event.urlAfterRedirects);
      }
    });
  }

  setStepFromUrl(url: string) {
    if (url.includes('input-detail')) {
      this.currentStep = 1;
      this.currentStepProgress = 0;
    } else if (url.includes('confirm-review')) {
      this.currentStep = 2;
      this.currentStepProgress = 100;
    }
  }
}
