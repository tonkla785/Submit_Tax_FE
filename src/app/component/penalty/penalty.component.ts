import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './penalty.component.html',
  styleUrl: './penalty.component.css',
})
export class PenaltyComponent {
  penalty: number | undefined;
}
