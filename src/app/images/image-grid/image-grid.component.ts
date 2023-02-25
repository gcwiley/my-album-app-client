import { Component, OnInit } from '@angular/core';

// import image service
import { ImageService } from 'src/app/services/image.service';

// import image type
import { Image } from 'src/app/types/image.interface';

@Component({
	selector: 'app-image-grid',
	templateUrl: './image-grid.component.html',
	styleUrls: ['./image-grid.component.scss'],
})
export class ImageGridComponent implements OnInit {
	isLoadingImages = true;
	images: Image[] = [];

	constructor(private imageService: ImageService) {}

	ngOnInit(): void {
		this.getImages();
	}

	getImages(): void {
		this.imageService.getImages().subscribe((images) => {
			this.images = images;
			this.isLoadingImages = false;
		});
	}
}
