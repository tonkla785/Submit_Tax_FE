import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filing-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filing-type.component.html',
  styleUrl: './filing-type.component.css'
})
export class FilingTypeComponent {

  typeFiling:string='0';

}
