import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taza } from '../Modelo/Taza';
import { Order } from '../Modelo/Order';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { 

  }

  Url='http://localhost:8080/api/tazas';
  UrlP='http://localhost:8080/api/createTaza';
  UrlU='http://localhost:8080/api/updateTaza';
  UrlD='http://localhost:8080/api/deleteTaza';

  UrlGo='http://localhost:8080/api/orders';
  UrlPo='http://localhost:8080/api/createOrder';
  UrlUo='http://localhost:8080/api/updateOrder';
  UrlDo='http://localhost:8080/api/deleteOrder';

  getProducts(){
    return this.http.get<Taza[]>(this.Url);
  }
  createTaza(taza:Taza){
    return this.http.post<Taza>(this.UrlP,taza);

  }
  getTazaId(id:number){
    return this.http.get<Taza>(this.Url+"/"+id);
  }
  updateTaza(taza:Taza){
    return this.http.put<Taza>(this.UrlU+"/"+taza.id, taza);
  }
  deleteTaza(taza:Taza){
    return this.http.delete<Taza>(this.UrlD+"/"+taza.id);
  }


  getOrders(){
    return this.http.get<Order[]>(this.UrlGo);
  }

  createOrder(order:Order){
    return this.http.post<Order>(this.UrlPo,order);
  }
  getOrderId(num_order:number){
    return this.http.get<Order>(this.UrlGo+"/"+num_order);
  }

  updateOrder(order:Order){
    return this.http.put<Order>(this.UrlUo+"/"+order.num_order, order);
  }
  deleteOrder(order:Order){
    return this.http.delete<Order>(this.UrlDo+"/"+order.num_order);
  }


}
