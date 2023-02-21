import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import page components
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SigninComponent } from './signin-page/signin-page.component';
import { SignupComponent } from './signup-page/signup-page.component';

@NgModule({
	imports: [CommonModule],
	declarations: [
		AboutPageComponent,
		MainPageComponent,
		NotFoundPageComponent,
		ResetPasswordPageComponent,
		SigninComponent,
		SignupComponent,
	],
	exports: [
		AboutPageComponent,
		MainPageComponent,
		NotFoundPageComponent,
		ResetPasswordPageComponent,
		SigninComponent,
		SignupComponent,
	],
})
export class PageComponentModule {}
