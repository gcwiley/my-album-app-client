import { Component, OnInit } from '@angular/core';

// import the album service
import { AlbumService } from 'src/app/services/album.service';

// import the album interface
import { Album } from 'src/app/types/album.interface';

@Component({
	selector: 'app-recent-albums',
	templateUrl: './recent-albums.component.html',
	styleUrls: ['./recent-albums.component.scss'],
})
export class RecentAlbumsComponent implements OnInit {
	recentAlbums!: Album[];

	constructor(private albumService: AlbumService) {}

	ngOnInit(): void {
		this.getRecentAlbums();
	}

	getRecentAlbums(): void {
		this.albumService
			.getRecentAlbums()
			.subscribe((recentAlbums) => (this.recentAlbums = recentAlbums));
	}
}
