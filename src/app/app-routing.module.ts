import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import route guard
import { RouteGuard } from './guards/route.guard';

// album components
import { AlbumFormComponent } from './albums/album-form/album-form.component';
import { AlbumGridComponent } from './albums/album-grid/album-grid.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

// auth components
import { SigninComponent } from './pages/signin-page/signin-page.component';
import { SignupComponent } from './pages/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';

// About Page
import { AboutPageComponent } from './pages/about-page/about-page.component';

// upload image page
import { ImageUploadComponent } from './images/image-upload/image-upload.component';

// Not Found Page
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/albums', pathMatch: 'full' },
	{ path: 'albums', component: AlbumGridComponent, pathMatch: 'full', canActivate: [RouteGuard] },
	{ path: 'albums/:id', component: AlbumDetailsComponent, canActivate: [RouteGuard] },
	{ path: 'create', component: AlbumFormComponent, canActivate: [RouteGuard] },
	{ path: 'upload-image', component: ImageUploadComponent, canActivate: [RouteGuard] },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'reset-password', component: ResetPasswordPageComponent },
	{ path: 'about', component: AboutPageComponent, canActivate: [RouteGuard] },
	{ path: '**', component: NotFoundPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
