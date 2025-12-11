import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
  type:string = "On-time";
}
