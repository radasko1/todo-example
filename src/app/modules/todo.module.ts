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
import { InputTextareaModule } from 'primeng/inputtextarea';

import { TodoComponent } from './todo/components/todo/todo.component';
import { TodoService } from './todo/services/todo.service';
import { UserRolePipe } from './todo/pipes/user-role.pipe';

@NgModule({
	declarations: [TodoComponent, UserRolePipe],
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
		InputTextareaModule,
	],
	providers: [ConfirmationService, TodoService],
	exports: [TodoComponent],
})
export class TodoModule {}
