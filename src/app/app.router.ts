import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const router = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
]);

export default router;
