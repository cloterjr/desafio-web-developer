import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './../models/product';
import { SearchProductInput } from '../models/searchProductInput';
import { ProductCart } from '../models/product-cart';

@Injectable()
export class ProductService {

  // Event used to trigger the search on the ProductComponent
  searchProduct = new EventEmitter<SearchProductInput>();
  searchInput : SearchProductInput;

  addProductToCart = new EventEmitter<ProductCart>();
  reOrderProducts = new EventEmitter<number>();

  products : ProductCart[] = [];

  private productsUrl = 'app/products';  // URL to web api, this code must be replaced with real web Api uri, when not using mocking

  constructor(private http: Http) { }

  getProducts(): Promise<Array<Product>> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Product[];
      })
      .catch(this.handleError);
  }

  onSearch(searchInput: SearchProductInput){
    this.searchInput = searchInput;
    console.log(this.searchInput);
    this.searchProduct.emit(searchInput);
  }

  onAddProductToCart(product: Product, qty: number){
    console.log("onAddProductToCart");
    
    let productCart = new ProductCart();
    productCart.id = product.id;
    productCart.idCategorie = product.idCategorie;
    productCart.name = product.name;
    productCart.price = product.price;
    productCart.images = product.images;
    productCart.totalItens = qty;
    productCart.totalPrice = product.price;
    this.products.push(productCart);
    this.addProductToCart.emit(productCart);
  }

  onReorderProducts(ordenation : number){
    console.log("Emiting Event Reordenation:" + ordenation);
    this.reOrderProducts.emit(ordenation);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}