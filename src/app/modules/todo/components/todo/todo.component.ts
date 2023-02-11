import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.interface';
import locale from '../../todo.localization.json';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss'],
	providers: [TodoService],
})
export class TodoComponent implements OnInit {
	/** List of Todo objects */
	protected todoList: Todo[] = [];
	/** Edited Todo object. When property is 'undefined' it means user switch to creation mode. */
	private editedTodo: Todo | undefined;

	/** Number of rows per one page in table */
	protected paginatorRows = 10;
	protected paginatorFirst = 0;

	/** Flag to show dialog form to create or update Todo object */
	protected showTodoForm = false;
	/** Form data to create/update Todo object */
	protected editForm = this.fb.group({
		userId: new FormControl<number>(0, { nonNullable: true }),
		id: new FormControl<number>(0, { nonNullable: true }),
		title: new FormControl<string>('', { nonNullable: true }),
		completed: new FormControl<boolean>(false, { nonNullable: true }),
	});

	/** Localization texts declaration to be accessed in template */
	protected locale = locale;

	constructor(
		private fb: FormBuilder,
		private todoService: TodoService,
		private confirmationService: ConfirmationService
	) {}

	ngOnInit(): void {
		/* Load collection of Todo objects from endpoint */
		this.todoService.getTodos().subscribe({
			next: (todoList) => (this.todoList = todoList),
			error: (err) => console.error(err),
		});
	}

	/**
	 * Edit table row in dialog form
	 * @param todo Edited Todo object
	 */
	protected editTodo(todo: Todo): void {
		this.editedTodo = todo;
		this.editForm.patchValue(todo);
		this.showTodoForm = true;
	}

	/**
	 * Save edited Todo object with new values
	 */
	protected saveTodo(): void {
    // created/updated Todo object
		const todoObject = this.editForm.getRawValue();

		if (this.editedTodo) {
      // whether is Todo object in 'editedTodo' property, update Todos collection
			this.todoList = this.todoList.map((todo) =>
				todo.id === this.editedTodo?.id ? todoObject : todo
			);
		} else {
      // otherwise add new Todo object inside Todos collection
			this.todoList = [...this.todoList, todoObject];
		}

		// place to call post/patch/put method from service

		this.showTodoForm = false;
    this.editedTodo = undefined;
    this.editForm.reset();
	}

	/**
	 * Remove Todo object from table
	 * @param todo Removed Todo object
	 */
	protected deleteTodo(todo: Todo): void {
		this.confirmationService.confirm({
			message: locale.DeleteConfirmationText,
			header: locale.DeleteConfirmationHeader,
			acceptLabel: locale.Delete,
			acceptButtonStyleClass: 'p-button-danger',
			rejectLabel: locale.Cancel,
			rejectButtonStyleClass: 'p-button-secondary',
			accept: () => {
				this.todoList = this.todoList.filter(
					(todoItem) => todoItem.id !== todo.id
				);
				// place to call delete method from service
			},
		});
	}

  /**
   * Cancel update/create action in dialog form.
   */
  protected cancel(): void {
    this.showTodoForm = false;
    this.editedTodo = undefined;
    this.editForm.reset();
  }
}
