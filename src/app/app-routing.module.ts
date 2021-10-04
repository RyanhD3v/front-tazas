import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOComponent } from './Order/add-o/add-o.component';
import { EditOComponent } from './Order/edit-o/edit-o.component';
import { ListarOComponent } from './Order/listar-o/listar-o.component';
import { AddComponent } from './Taza/add/add.component';
import { EditComponent } from './Taza/edit/edit.component';
import { ListarComponent } from './Taza/listar/listar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent },
  {path:'edit', component:EditComponent},
  {path:'listarO', component:ListarOComponent},
  {path:'addO', component:AddOComponent },
  {path:'editO', component:EditOComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
