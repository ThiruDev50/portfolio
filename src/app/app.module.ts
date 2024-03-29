import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxTypedJsComponent, NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HideOnScrollDirective } from './Helpers/Hide-On-Scroll/hide-on-scroll';
import { BouncingComponent } from './Components/HelpersComp/bouncing/bouncing.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { ContributionsComponent } from './Components/contributions/contributions.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ThreeDCardComponent } from './Components/HelpersComp/three-d-card/three-d-card.component';
import { GlassCardComponent } from './Components/HelpersComp/glass-card/glass-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { QuoteComponent } from './Components/quote/quote.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SocialComponent } from './Components/HelpersComp/social/social.component';
import { ExpandingCompComponent } from './Components/expanding-comp/expanding-comp.component';
import { TestComponent } from './Components/HelpersComp/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HideOnScrollDirective,
    BouncingComponent,
    SkillsComponent,
    AboutComponent,
    HomeComponent,
    ContributionsComponent,
    ProjectsComponent,
    ThreeDCardComponent,
    GlassCardComponent,
    QuoteComponent,
    FooterComponent,
    SocialComponent,
    ExpandingCompComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  
}
