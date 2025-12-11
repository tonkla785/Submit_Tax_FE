import { Routes } from '@angular/router';
import { InputDetailComponent } from './input-detail/input-detail.component';
import { ConfirmReviewComponent } from './confirm-review/confirm-review.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'input-detail',
        pathMatch: 'full'
    },
    { path: 'input-detail', component: InputDetailComponent },
    { path: 'confirm-review', component: ConfirmReviewComponent }
];
