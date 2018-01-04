import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShopService {

  action : string = "";
  total = 0;
  shoppingCartEvent = new EventEmitter<string>();
  updateTotalItens = new EventEmitter<number>();

  constructor(private http: Http) { }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  onShoppingCartEvent(action: string){
    this.action = action;
    this.shoppingCartEvent.emit(action);
  }

  onUpdateTotalItens(totalOrderItens: number){
    this.total = totalOrderItens;
    this.updateTotalItens.emit(totalOrderItens);
  }
}