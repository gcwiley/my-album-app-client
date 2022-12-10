import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Album Components
import { AlbumFormComponent } from './albums/album-form/album-form.component';
import { AlbumListComponent } from './albums/album-grid/album-grid.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

// Auth Components
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

// About Page
import { AboutPageComponent } from './about-page/about-page.component';

// Not Found Page
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumListComponent, pathMatch: 'full' },
  { path: 'albums/:id', component: AlbumDetailsComponent },
  { path: 'create', component: AlbumFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
