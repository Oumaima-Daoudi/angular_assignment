import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { MatPaginatorModule } from "@angular/material/paginator";

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkeletonComponent } from './skeleton/skeleton.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatPaginatorModule
    /* StoreModule.forRoot(coffeeReducer),
    StoreModule.forFeature('coffee', coffeeReducer) */
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
