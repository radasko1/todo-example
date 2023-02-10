import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';

import { TodoComponent } from './todo/components/todo/todo.component';
import { TodoService } from './todo/services/todo.service';

@NgModule({
	declarations: [TodoComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TableModule,
		ButtonModule,
		ConfirmDialogModule,
		DialogModule,
		InputTextModule,
		CheckboxModule,
		InputNumberModule,
	],
	providers: [ConfirmationService, TodoService], // TODO do I need confirmation service?
	exports: [TodoComponent],
})
export class TodoModule {}
