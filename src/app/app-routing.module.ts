import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { TestComponent } from './Components/HelpersComp/test/test.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'test', component:TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
