import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Modelo/Order';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-o',
  templateUrl: './add-o.component.html',
  styleUrls: ['./add-o.component.css']
})
export class AddOComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  order:Order = new Order();
  GuardarO(){
    this.service.createOrder(this.order)
      .subscribe(data=>{
        alert("Se creo una nueva orden de salida");
        this.router.navigate(["listarO"]);
      })
  }

}
