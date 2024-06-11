import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RedirectViewComponent } from './components/redirect-view/redirect-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: RedirectViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
