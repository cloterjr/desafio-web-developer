import { ShopService } from './../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.addProductToCart.subscribe(product=>{
      window.alert(`${product.name} Added to Cart.`);
    });

    this.router.navigate(['/catalog', { outlets: { 'content': ['categorie',0] } }]);
  }

}
