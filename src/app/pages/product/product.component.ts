import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from './../../services/product.service';
import { SiteService } from './../../services/site.service';

import { Product } from './../../models/product';
import { SearchProductInput } from '../../models/searchProductInput';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  searchProductInput : SearchProductInput;

  products : Product[] = [];
  error : any;

  categorie : Categorie;
  categories : Categorie[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private productService : ProductService, private siteService : SiteService) { }

  async ngOnInit() {
    this.productService.searchProduct.subscribe(input=>{
      this.searchProductInput = input;
      this.getProducts();
    });

    this.searchProductInput = new SearchProductInput();
      await this.route.params.subscribe(params => {
        let _search = this.route.snapshot.queryParams['search'];
        if(_search != undefined && _search != null && _search != ""){
          this.searchProductInput.searchTerm = _search;
        }else{
          this.searchProductInput.searchTerm = "";
        }
        this.searchProductInput.categorieId = +params.id;

        if(this.searchProductInput && this.searchProductInput.categorieId != 0)
        {
          this.siteService
          .getCategories()
          .then(categories => {
            this.categories = categories
            this.categorie = this.categories.find(c=>c.id == this.searchProductInput.categorieId);
          }); 
        }

        this.getProducts();

    });

    this.productService.reOrderProducts.subscribe(ordenation => {
      if(ordenation == 1){
        this.products = this.products.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a. name > b.name) return 1;
          return 0;
        });
      }else if(ordenation == 2){
        this.products = this.products.sort(function(a, b){
          if(a.name < b.name) return 1;
          if(a. name > b.name) return -1;
          return 0;
        });
      }
  });
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products =>{
        let productsAux: Product [] = [];

        // Case the searchTerm is not null, the return of the Product Services is filtered by the searchTerm variable
        if(this.searchProductInput && this.searchProductInput.searchTerm && this.searchProductInput.searchTerm != "")
        {
          products.forEach(p=>{
            if(this.searchProductInput == undefined || this.searchProductInput.searchTerm == "" || p.name.toLowerCase().indexOf(this.searchProductInput.searchTerm.toLowerCase()) > -1){
                productsAux.push(p);
            }
          });
          products = productsAux;
        }
        else if(this.searchProductInput && this.searchProductInput.categorieId != 0)
        {
          products.forEach(p=>{
            if(this.searchProductInput == undefined || this.searchProductInput.categorieId == 0 || p.idCategorie == this.searchProductInput.categorieId){
                productsAux.push(p);
            }
          });

          products = productsAux;
        }
        this.products = products;
      })
      .catch(error => this.error = error);
  }

  viewProductDetail(productId : number) : void {
    this.router.navigate(['/catalog', { outlets: { 'content': ['product', productId] } }]);
  }
}
