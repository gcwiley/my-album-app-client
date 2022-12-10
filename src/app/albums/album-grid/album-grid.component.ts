import { Component, OnInit } from '@angular/core';

// Import Album Service
import { AlbumService } from '../album.service';

// Import Album Type
import { Album } from '../../types'
@Component({
    selector: 'album-grid',
    templateUrl: './album-grid.component.html',
    styleUrls: ['./album-grid.component.css'],
})
export class AlbumGridComponent implements OnInit {

    isLoadingAlbums = true;
    albums: Album[] = []

    constructor(private albumService: AlbumService) { }

    ngOnInit(): void {
        this.getAlbums();
    }

    getAlbums(): void {
        this.albumService.getAlbums().subscribe((albums) => {
            this.albums = albums
            this.isLoadingAlbums = false
        })
    }
}

