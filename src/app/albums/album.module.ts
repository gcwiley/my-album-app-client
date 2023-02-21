import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // forms

// import album components
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumFormComponent } from './album-form/album-form.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';
import { AlbumSearchComponent } from './album-search/album-search.component';

@NgModule({
	imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
	declarations: [
		AlbumDetailsComponent,
		AlbumFormComponent,
		AlbumGridComponent,
		AlbumSearchComponent,
	],
	exports: [
		AlbumDetailsComponent,
		AlbumFormComponent,
		AlbumGridComponent,
		AlbumSearchComponent,
	],
})
export class AlbumComponentsModule {}
