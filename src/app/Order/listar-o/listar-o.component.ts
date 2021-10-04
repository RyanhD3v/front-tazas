import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Order } from 'src/app/Modelo/Order';

@Component({
  selector: 'app-listar-o',
  templateUrl: './listar-o.component.html',
  styleUrls: ['./listar-o.component.css']
})
export class ListarOComponent implements OnInit {

  orders!:Order[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getOrders()
    .subscribe(data=>{
      this.orders=data;
    })
  }
  EditarO(order:Order):void{
    localStorage.setItem("num_orden",order.num_order.toString());
    this.router.navigate(["edit-o"]);
  }

  DeleteO(order:Order){
    this.service.deleteOrder(order)
    .subscribe(data=>{
      this.orders=this.orders.filter(o=>o!==order);
      alert("Se a eliminado la orden")
    })
  }

}
