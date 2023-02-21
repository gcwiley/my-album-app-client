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

// load environmental modules
import { environment } from '../environments/environment';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// import pipes
import { PipesModule } from './pipes/pipe.module';

// Main App Component
import { AppComponent } from './app.component';

// import Page module
import { PageComponentModule } from './pages/page.module';

// import shared components
import { SharedComponentsModule } from './shared/shared.module';

// Album Components
import { AlbumComponentsModule } from './albums/album.module';

// Comment Components
import { CommentComponentModule } from './comments/comment.module';

// Image Component
import { ImageComponentModule } from './images/image.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		MatNativeDateModule,
		AngularFireModule.initializeApp(environment.firebase),
		PipesModule,
		PageComponentModule,
		SharedComponentsModule,
		AlbumComponentsModule,
		CommentComponentModule,
		ImageComponentModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
