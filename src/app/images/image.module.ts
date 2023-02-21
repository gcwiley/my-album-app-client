import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // forms

// import image components
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
// add new image components here

@NgModule({
	imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
	declarations: [ImageGridComponent, ImageUploadComponent],
	exports: [ImageGridComponent, ImageUploadComponent],
})
export class ImageComponentModule {}
