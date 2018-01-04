import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing.module';

import { InMemoryWebApiModule  } from 'angular-in-memory-web-api';
import { InMemoryCatalogoDbService } from './utils/InMemoryCatalogoDbService';

import { AppComponent } from './app.component';

import { SiteService } from './services/site.service';
import { ProductService } from './services/product.service';

import { CatalogComponent } from './pages/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { MenuComponent } from './pages/comum/menu/menu.component';
import { SideMenuComponent } from './pages/comum/side-menu/side-menu.component';
import { ShopService } from './services/shop.service';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FooterComponent } from './pages/comum/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductComponent,
    MenuComponent,
    SideMenuComponent,
    ProductDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryCatalogoDbService, { delay: 600 })
  ],
  providers: [ProductService, SiteService, ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
