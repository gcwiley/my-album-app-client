// Angular Core Modules
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // used for Template Forms
import { ReactiveFormsModule } from "@angular/forms"; // used for Reactive Forms
import { HttpClientModule } from "@angular/common/http";
import { MatNativeDateModule } from "@angular/material/core";

// Set up Firebase FIX THIS!!!!
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";

// Main App Component
import { AppComponent } from "./app.component";

// App Routing Module
import { AppRoutingModule } from "./app-routing.module";

// PIPES
import { Pipes } from "./pipes/index";

// PAGES
import { Pages } from "./pages/index";

// SHARED COMPONENTS
import { SharedComponents } from "./shared";

// Album Components
import { AlbumComponents } from "./albums";

// Comment Components\
import { CommentFormComponent } from "./comments/comment-form/comment-form.component";
import { CommentListComponent } from "./comments/comment-list/comment-list.component";

// SHARED COMPONENTS

@NgModule({
	declarations: [AppComponent, CommentFormComponent, CommentListComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		MatNativeDateModule,
		Pipes,
		Pages,
		SharedComponents,
		AlbumComponents,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
