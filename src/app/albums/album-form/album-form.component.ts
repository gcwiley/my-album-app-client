import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// Import Album Service
import { AlbumService } from '../album.service';

// Import Album Type
import { Album } from 'src/app/types';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css'],
})
export class AlbumFormComponent {
  public mode: string = 'create';
  private id!: string | any;
  private album!: Album;

  // create the album form
  albumForm = this.formBuilder.group({
    title: ['', Validators.required],
    artist: ['', Validators.required],
    releaseDate: ['', Validators.required],
    label: ['', Validators.required],
    studio: ['', Validators.required],
    genre: ['', Validators.required],
    imageUrl: ['', Validators.required],
    summary: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    // find out if we have an id in the url
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.id = paramMap.get('id');
        this.albumService.getAlbum(this.id).subscribe((album) => {
          this.album = album;
          // overrides the value of initial form controls
          this.albumForm.setValue({
            // set the value of the form controls
            title: this.album.title,
            artist: this.album.artist,
            releaseDate: this.album.releaseDate,
            label: this.album.label,
            studio: this.album.studio,
            genre: this.album.genre,
            imageUrl: this.album.imageUrl,
            summary: this.album.summary,
          });
        });
      } else {
        this.mode = 'create';
        this.id = null;
      }
    });
  }
}
