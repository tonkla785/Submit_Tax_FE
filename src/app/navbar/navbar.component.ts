import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TimeThPipe } from '../util/time-th.pipe';
import { DateFormatPipe } from '../util/date-format.pipe';
import { RouterModule } from '@angular/router';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TimeThPipe, DateFormatPipe,CommonModule, RouterModule,ProgressComponent],
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
