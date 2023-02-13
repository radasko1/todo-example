import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { Todo } from '../models/todo.interface';
import { environment } from '../../../../environments/environment';

@Injectable()
export class TodoService {
	private readonly url = environment.todoUrl;

	constructor(private httpClient: HttpClient) {}

	/**
	 * Get collection of Todos objects from endpoint.
	 *
	 * In case when something happen, method return empty array.
	 *
	 * @returns Collection of Task/Todo objects
	 */
	public getTodos(): Observable<Todo[]> {
		return this.httpClient
			.get<Todo[]>(`${this.url}/todos`)
			.pipe(catchError(() => of([])));
	}
}
