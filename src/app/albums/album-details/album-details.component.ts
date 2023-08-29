import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import the album service
import { AlbumService } from '../../services/album.service';

// import the album interface
import { Album } from '../../types/album.interface';

@Component({
	selector: 'app-album-details',
	templateUrl: './album-details.component.html',
	styleUrls: ['./album-details.component.scss'],
	standalone: true,
})
export class AlbumDetailsComponent implements OnInit {
	isLoading = true;
	album!: Album | null;

	constructor(
		private route: ActivatedRoute,
		private albumService: AlbumService
	) {}

	ngOnInit(): void {
		this.getAlbum();
	}

	// GET Album by id
	getAlbum(): void {
		const id = this.route.snapshot.paramMap.get('id')!;
		this.albumService.getAlbum(id).subscribe((album) => (this.album = album));
	}
}
