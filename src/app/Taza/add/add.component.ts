import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taza } from 'src/app/Modelo/Taza';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  taza:Taza = new Taza();
  Guardar(){
    this.service.createTaza(this.taza)
      .subscribe(data=>{
        alert("Taza agregada");
        this.router.navigate(["listar"]);
      })
  }

}
