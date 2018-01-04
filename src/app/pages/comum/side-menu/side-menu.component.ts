import { SearchProductInput } from './../../../models/searchProductInput';
import { Product } from './../../../models/product';
import { ShopService } from './../../../services/shop.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductCart } from '../../../models/product-cart';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  cart : ProductCart[] = [];

  action : string = "";
  totalOrder : number = 0;
  totalOrderItens : number = 0;

  constructor(private shopService : ShopService, private productService : ProductService) { }

  ngOnInit() {
  
    // the subscribe that intercepts a event and open the cart in the side menu
    this.shopService.shoppingCartEvent.subscribe(action => {
      console.log(`Abrindo carrinho pelo SideMenuComponent`);
      this.action = action;

      if(action == "open"){
        this.openShoppingCart();
      }
      else if(action == "open"){
        this.closeShoppingCart();
      }
    });

    // this method has the responsability of adding the product to cart.
    this.productService.addProductToCart.subscribe(product => {
      console.log(`Product Added to Shop Cart`);
      console.log(product);

      console.log(this.cart.find(p=>p.id == product.id));

      if(this.cart.find(p=>p.id == product.id))
      {
        console.log("Product Already exists in the Cart");
        console.log(this.cart);
        this.cart.find(p=>p.id == product.id).totalItens += product.totalItens;
        this.cart.find(p=>p.id == product.id).totalPrice = this.cart.find(p=>p.id == product.id).totalItens * product.price;
      }else{
        console.log("Product don't exists in the Cart");
        console.log(this.cart);
        let productCart = new ProductCart();
        productCart.id = product.id;
        productCart.idCategorie = product.idCategorie;
        productCart.name = product.name;
        productCart.price = product.price;
        productCart.images = product.images;
        productCart.totalItens = product.totalItens;
        productCart.totalPrice = product.price * product.totalItens;

        this.cart.push(productCart);
      }

      this.updateTotalOrder(null,null);
    });
  }

  openShoppingCart() : void {
      document.getElementById("mySidenav").style.width = "30%";
  }

  closeShoppingCart() : void{
      document.getElementById("mySidenav").style.width = "0";
  }

  removeProduct(productId : number) : void{
    this.cart.splice(this.cart.findIndex(p=>p.id == productId),1);
    this.updateTotalOrder(null, null);
  }

  // Update the values of the order
  updateTotalOrder(id: number, value:any) : void{
    try {
      if(value == null){
        value = 0;
      }

      let _total = parseInt(value);
      this.totalOrder = 0;
      this.totalOrderItens = 0;

      if(id != null && id != 0 && _total >= 0){
        console.log(`Id:${id}`);
        console.log(`Value:${_total}`);
        this.cart.find(p=>p.id == id).totalItens = _total;
      }
  
      this.cart.forEach(product=>{
        this.totalOrder+=(product.totalItens * product.price);
        if(product.totalItens > 0){
          this.totalOrderItens+=product.totalItens;
        }
      });
  
      this.shopService.onUpdateTotalItens(this.totalOrderItens);
    } catch (error) {
      console.log(error);
    }
  }
}
