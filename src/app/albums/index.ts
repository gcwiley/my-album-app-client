import { NgModule } from "@angular/core";

// pages
import { AlbumDetailsComponent } from "../albums/album-details/album-details.component";
import { AlbumFormComponent } from "./album-form/album-form.component";
import { AlbumGridComponent } from "./album-grid/album-grid.component";
// NOTE: add new album components here

@NgModule({
	declarations: [
		AlbumDetailsComponent,
		AlbumFormComponent,
		AlbumGridComponent,
	],
	exports: [AlbumDetailsComponent, AlbumFormComponent, AlbumGridComponent],
})
export class AlbumComponents {}
