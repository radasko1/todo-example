/**
 * Todo object
 */
export interface Todo {
	/** User role */
	user: string;
	/** User identifier */
	userId: number;
	/** Task identifier */
	id: number;
	/** Task description */
	title: string;
	/** Task status */
	completed: boolean;
}
