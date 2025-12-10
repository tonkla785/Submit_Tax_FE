import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { InputDetailComponent } from '../input-detail/input-detail.component';
import { ConfirmReviewComponent } from '../confirm-review/confirm-review.component';
import { TimeThPipe } from '../util/time-th.pipe';
import { DateFormatPipe } from '../util/date-format.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [InputDetailComponent, ConfirmReviewComponent, TimeThPipe, DateFormatPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  time: Date = new Date();

  constructor(@Inject(PLATFORM_ID) private web: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.web)) {

      setInterval(() => {
        this.time = new Date();
      }, 60000);
    }
  }

}
