import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Album Components
import { AlbumFormComponent } from './albums/album-form/album-form.component';
import { AlbumGridComponent } from './albums/album-grid/album-grid.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

// Auth Components
import { SigninComponent } from './pages/signin-page/signin-page.component';
import { SignupComponent } from './pages/signup-page/signup-page.component';

// About Page
import { AboutPageComponent } from './about-page/about-page.component';

// Not Found Page
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumGridComponent, pathMatch: 'full' },
  { path: 'albums/:id', component: AlbumDetailsComponent },
  { path: 'create', component: AlbumFormComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
