import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
	{
		path: '',
		component: TodoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [],
})
export class TodoRoutingModule {}