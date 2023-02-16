import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTING_DEFINITION } from '../assets/routing.definition';

const routes: Routes = [
  {
    path: ROUTING_DEFINITION.TODO,
    loadChildren: () => import('./modules/todo/todo.module').then((m) => m.TodoModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class AppRoutingModule {}
