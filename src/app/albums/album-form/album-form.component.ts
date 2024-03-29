import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import album service
import { AlbumService } from '../../services/album.service';

// import album interface
import { Album } from '../../types/album.interface';

@Component({
	selector: 'app-album-form',
	templateUrl: './album-form.component.html',
	styleUrls: ['./album-form.component.scss'],
	standalone: true,
})
export class AlbumFormComponent implements OnInit {
	public mode = 'create';
	private id!: string | null;
	private album!: Album;

	genres = ['Rock', 'Alternative Rock'];

	// create the album form
	albumForm = this.formBuilder.group({
		title: ['', Validators.required],
		artist: ['', Validators.required],
		releaseDate: ['', Validators.required],
		label: ['', Validators.required],
		studio: ['', Validators.required],
		genre: ['', Validators.required],
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
						summary: this.album.summary,
					});
				});
			} else {
				this.mode = 'create';
				this.id = null;
			}
		});
	}

	// saves new album to database
	onSaveAlbum() {
		if (this.mode === 'create') {
			this.albumService.addAlbum(this.albumForm.value).subscribe(() => {
				// naivates back to the home page
				this.router.navigateByUrl('/');
			});
		} else {
			this.albumService
				.updateAlbum(this.id, this.albumForm.value)
				.subscribe(() => {
					// navigates back to the home page
					this.router.navigateByUrl('/');
				});
		}
	}
}
