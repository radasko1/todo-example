import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Todo } from '../models/todo.interface';
import { environment } from '../../../../environments/environment';

@Injectable()
export class TodoService {
	private readonly url = environment.todoUrl;

	constructor(private httpClient: HttpClient) {}

	/**
	 * Get collection of Todos objects from endpoint.
	 *
	 * Incoming data are transformed into desired form, where:
	 * - user with 'id' 1 is shown as 'admin'
	 * - user with 'id' 2 is shown as 'tester'
	 *
	 * @returns Collection of Task/Todo objects
	 */
	public getTodos(): Observable<Todo[]> {
		return this.httpClient.get<Todo[]>(this.url).pipe(
			map((todoCollection) =>
				todoCollection.map((todo) => {
					if (todo.userId === 1) {
						todo.user = 'admin';
					} else if (todo.userId === 2) {
						todo.user = 'tester';
					} else {
						todo.user = 'neznámý uživatel';
					}
					return todo;
				})
			)
		);
	}
}
