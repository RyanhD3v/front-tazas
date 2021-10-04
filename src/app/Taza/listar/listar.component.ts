import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Taza } from 'src/app/Modelo/Taza';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tazas!:Taza[];
  constructor(private service:ServiceService, private router:Router ) { }

  ngOnInit() {
    this.service.getProducts()
    .subscribe(data=>{
      this.tazas=data;
    })
  }
  Editar(taza:Taza):void{
    localStorage.setItem("id",taza.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(taza:Taza){
    this.service.deleteTaza(taza)
    .subscribe(data=>{
      this.tazas=this.tazas.filter(t=>t!==taza);
      alert("Se a eliminado del inventario")
    })
  }

}
