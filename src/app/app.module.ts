// Angular Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // used for Template Forms
import { ReactiveFormsModule } from '@angular/forms'; // used for Reactive Forms
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

// Set up Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

// Main App Component
import { AppComponent } from './app.component';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// PIPES
import { SimpleTruncatePipe } from './pipes/simple-truncate';
import { TruncatePipe } from './pipes/truncate';

// Album Components
import { AlbumFormComponent } from './albums/album-form/album-form.component';
import { AlbumGridComponent } from './albums/album-grid/album-grid.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';

// SHARED COMPONENTS
import { NavBarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

// Auth Components
import { SigninComponent } from './pages/signin/signin-page.component';
import { SignupComponent } from './pages/signup/signup-page.component';

// FEEDBACK PAGE
import { FeedbackComponent } from './comments/feedback.component';
import { MessagesComponent } from './messages/messages.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumGridComponent,
    AlbumFormComponent,
    AlbumDetailsComponent,
    FooterComponent,
    SignupComponent,
    FeedbackComponent,
    SigninComponent,
    MessagesComponent,
    NavBarComponent,
    SimpleTruncatePipe,
    TruncatePipe,
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
