import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopSingleComponent } from './pages/shop-single/shop-single.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesofTheMonthComponent } from './components/categoriesof-the-month/categoriesof-the-month.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ServiceComponent } from './components/service/service.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { LikedProductsComponent } from './pages/liked-products/liked-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    ShopSingleComponent,
    HeaderComponent,
    ModalComponent,
    HeroComponent,
    CategoriesofTheMonthComponent,
    FeaturedProductComponent,
    FooterComponent,
    ContentComponent,
    BrandsComponent,
    AboutUsComponent,
    OurServicesComponent,
    CategoriesComponent,
    ServiceComponent,
    FormComponent,
    LikedProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
