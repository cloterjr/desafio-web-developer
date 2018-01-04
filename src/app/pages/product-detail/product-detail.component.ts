import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './../../services/product.service';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId : number;
  product : Product;
  error : any;

  constructor(private route: ActivatedRoute, private productService : ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.productId = params.id;
        this.getProductDetail();
    });
  }

  getProductDetail() : void {
    this.productService.getProducts()
    .then(products => {
      products.forEach(product=>{
        if(product.id == this.productId){
          this.product = product;
        }
      });
    })
    .catch(error => this.error = error);
  }

  addToCart(product : Product, qty: any){
    if(qty == null){
      qty = 0;
    }

    if(qty == 0){
      window.alert("You must set the quantity to proceed with the purchase.");
    }
    else{
      this.productService.onAddProductToCart(product, parseInt(qty));
    }
  }

}
