import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatMenuModule} from '@angular/material';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealComponent } from './top-deal/top-deal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ImageCarouselComponent,
    TopDealComponent,
    AboutUsComponent,
    FeedbackComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
