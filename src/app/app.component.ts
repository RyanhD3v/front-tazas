import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-Api';

  constructor(private router:Router){
    
  }

  Listar(){
    this.router.navigate(["listar"])
  }

  Nuevo(){
    this.router.navigate(["add"])
  }

  ListarO(){
    this.router.navigate(["listarO"])
  }

  NuevoO(){
    this.router.navigate(["addO"])
  }


}
