import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the route guard
import { RouteGuard } from './guards/route.guard';

// import the about page
import { AboutPageComponent } from './pages/about-page/about-page.component';

// import the create page
import { CreatePageComponent } from './pages/create-page/create-page.component';

// import the details page
import { DetailsPageComponent } from './pages/details-page/details-page.component';

// import the main page
import { MainPageComponent } from './pages/main-page/main-page.component';

// import the not found page
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// import the reset password page
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';

// import the sign in page
import { SigninComponent } from './pages/signin-page/signin-page.component';

// import the sign up page
import { SignupComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/albums', pathMatch: 'full' },
	{ path: 'albums', component: AlbumGridComponent, pathMatch: 'full' },
	{ path: 'albums/:id', component: AlbumDetailsComponent },
	{ path: 'create', component: AlbumFormComponent },
	{ path: 'upload-image', component: ImageUploadComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'reset-password', component: ResetPasswordPageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: '**', component: NotFoundPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
