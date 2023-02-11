// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // used for Template Forms
import { ReactiveFormsModule } from '@angular/forms'; // used for reactive forms
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

// Set up Firebase
import { AngularFireModule } from '@angular/fire/compat';

// load environmental modules - FIX THIS!
import { environment } from '../environments/environment';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// import pipes
import { SimpleTruncatePipe } from './pipes/simple-truncate.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

// Main App Component
import { AppComponent } from './app.component';

// Page Components
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { SigninComponent } from './pages/signin-page/signin-page.component';
import { SignupComponent } from './pages/signup-page/signup-page.component';

// import shared components
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './shared/hero/hero.component';
import { NavBarComponent } from './shared/navbar/navbar.component';

// Album Components
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumFormComponent } from './albums/album-form/album-form.component';
import { AlbumGridComponent } from './albums/album-grid/album-grid.component';
import { AlbumSearchComponent } from './albums/album-search/album-search.component';

// Comment Components
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';

@NgModule({
	declarations: [
		AppComponent,
		SimpleTruncatePipe,
		TruncatePipe,
		AboutPageComponent,
		MainPageComponent,
		NotFoundPageComponent,
		ResetPasswordPageComponent,
		SigninComponent,
		SignupComponent,
		FooterComponent,
		HeaderComponent,
		HeroComponent,
		NavBarComponent,
		AlbumDetailsComponent,
		AlbumFormComponent,
		AlbumGridComponent,
		AlbumSearchComponent,
		CommentFormComponent,
		CommentListComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		MatNativeDateModule,
		AngularFireModule.initializeApp(environment.firebase),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
