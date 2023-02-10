import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.interface';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
	providers: [TodoService],
})
export class TodoComponent implements OnInit {
	protected todoList: Todo[] = [];
  protected selectedRow: Todo | undefined;

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.todoService
			.getTodos()
			.subscribe((todoList) => (this.todoList = todoList));
	}
}
