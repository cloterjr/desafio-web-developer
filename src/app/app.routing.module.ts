import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CatalogComponent } from './pages/catalog.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';


const appRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "catalog" },
  { path: "catalog", component: CatalogComponent,
  children:
    [
        { path: 'categorie/:id', component: ProductComponent, outlet: 'content' },
        { path: 'product/:id', component: ProductDetailComponent, outlet: 'content' }
    ]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
