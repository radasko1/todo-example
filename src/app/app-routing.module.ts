import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTING_DEFINITION } from '../assets/routing.definition';
import { TodoComponent } from './modules/todo/components/todo/todo.component';
import { LoginComponent } from './modules/user/components/login/login.component';

const routes: Routes = [
	{
		path: ROUTING_DEFINITION.TODO,
		component: TodoComponent,
	},
  {
    path: ROUTING_DEFINITION.LOGIN,
    component: LoginComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
