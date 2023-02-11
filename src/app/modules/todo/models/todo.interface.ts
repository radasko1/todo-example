/**
 * Todo object
 */
export interface Todo {
	/** User identifier */
	userId: number;
	/** Task identifier */
	id: number;
	/** Task description */
	title: string;
	/** Task complete status */
	completed: boolean;
}
