import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taza } from 'src/app/Modelo/Taza';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  taza:Taza = new Taza();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getTazaId(+id!)
    .subscribe(data=>{
      this.taza=data;
    })
  }
  Actualizar(taza:Taza){
    this.service.updateTaza(taza)
    .subscribe(data=>{
      this.taza=data;
      alert("Se actualizo el producto");
      this.router.navigate(["listar"]);
    })
  }

}
