import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { BaseComponent } from './components/base-component/base.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
	declarations: [BaseComponent, LoginComponent],
	imports: [CommonModule, CardModule, ButtonModule],
})
export class UserModule {}
