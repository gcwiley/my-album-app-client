import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import shared components module
import { SharedComponentsModule } from '../shared/shared.module';

// import album components module
import { AlbumComponentsModule } from '../albums/album.module';

// import page components
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SigninComponent } from './signin-page/signin-page.component';
import { SignupComponent } from './signup-page/signup-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		SharedComponentsModule,
		AlbumComponentsModule,
	],
	declarations: [
		AboutPageComponent,
		MainPageComponent,
		NotFoundPageComponent,
		ResetPasswordPageComponent,
		SigninComponent,
		SignupComponent,
  CreatePageComponent,
  DetailsPageComponent,
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
