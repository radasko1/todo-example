import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

import { TodoComponent } from './todo/components/todo/todo.component';
import { TodoService } from './todo/services/todo.service';

@NgModule({
	declarations: [TodoComponent],
	imports: [TableModule],
	providers: [TodoService],
	exports: [TodoComponent],
})
export class TodoModule {}
