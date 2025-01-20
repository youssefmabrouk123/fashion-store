import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopSingleComponent } from './pages/shop-single/shop-single.component';
import { LikedProductsComponent } from './pages/liked-products/liked-products.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'shop', component: ShopComponent },
 { path: 'details/:id', component: ShopSingleComponent },
 { path: 'liked-products', component: LikedProductsComponent },
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
