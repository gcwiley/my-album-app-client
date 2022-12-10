import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../../types';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  isLoading = true;
  album: Album | any;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.getAlbum()
  }

  // GET Album by id
  getAlbum(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.albumService.getAlbum(id).subscribe((album) => this.album = album)
  }
}