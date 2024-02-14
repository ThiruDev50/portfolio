import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ExpandingCompComponent } from './Components/expanding-comp/expanding-comp.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'test', component:ExpandingCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
