import { Pipe, PipeTransform } from '@angular/core';
import locale from '../todo.localization.json';

@Pipe({ name: 'userRole' })
/**
 * Show user role based on user ID.
 *
 * Usage:
 * value | userRole
 *
 * Example:
 * {{ user.id | userRole }}
 */
export class UserRolePipe implements PipeTransform {
	transform(userId: number): string {
		switch (userId) {
			case 1:
				return locale.AdminRole;
			case 2:
				return locale.TesterRole;
			default:
				return locale.UserRole;
		}
	}
}
