import { Component } from '@angular/core';
import { InputDetailComponent } from '../input-detail/input-detail.component';
import { ConfirmReviewComponent } from '../confirm-review/confirm-review.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [InputDetailComponent ,ConfirmReviewComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
