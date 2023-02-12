import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import image service
import { ImageService } from 'src/app/services/image.service';

@Component({
	selector: 'app-image-upload',
	templateUrl: './image-upload.component.html',
	styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
	title = '';

	selectedFile: File | null = null;

	constructor(private imageService: ImageService, private router: Router) {}

	onFileSelect(event: any): void {
		this.selectedFile = event.target.files[0];
	}

	onClickUpload(): void {
		// make sure there is a selected file
		if (this.selectedFile) {
			// creates the form data
			const formData = new FormData();

			formData.append('title', this.title);

			// append the file itself
			formData.append('file', this.selectedFile);

			this.imageService
				.uploadImage(formData)
				.subscribe(() => this.router.navigateByUrl('/'));
		}
	}
}
