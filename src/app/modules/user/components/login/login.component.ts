import { Component } from '@angular/core';
import { BaseComponent } from '../base-component/base.component';

@Component({
	selector: 'app-login',
	templateUrl: '../base-component/base.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent {
	protected override headerTitle = 'Login page';
  protected override subheaderTitle = 'Authenticate yourself'
  protected override cardWidth = '550px';
}
