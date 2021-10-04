import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Modelo/Order';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-o',
  templateUrl: './edit-o.component.html',
  styleUrls: ['./edit-o.component.css']
})
export class EditOComponent implements OnInit {

  order:Order = new Order();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.EditarO();
  }

  EditarO(){
    let num_orden=localStorage.getItem("num_orden");
    this.service.getOrderId(+num_orden!)
    .subscribe(data=>{
      this.order=data;
    })
  }
  ActualizarO(order:Order){
    this.service.updateOrder(order)
    .subscribe(data=>{
      this.order=data;
      alert("Orden actualizada");
      this.router.navigate(["listarO"]);
    })
  }


}
