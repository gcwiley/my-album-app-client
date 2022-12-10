import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

// Import Album Service
import { AlbumService } from "../album.service";

// Import Album Type
import { Album } from "src/app/types";

@Component({
    selector: 'app-album-form',
    templateUrl: './album-form.component.html',
    styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {

    public mode: string = 'create';
    private id: string | any;
    private album!: Album; 

    // create album form
    albumForm = this.formBuilder.group({
        title: ['', Validators.required],
        artist: ['', Validators.required],
        releaseDate: ['', Validators.required],
        label: ['', Validators.required],
        studio: ['', Validators.required],
        genre: ['', Validators.required],
        imageUrl: ['', Validators.required],
        summary: ['', Validators.required]

    })

    constructor(
        private formBuilder: UntypedFormBuilder,
        private router: Router,
        private albumService: AlbumService
    ) { }

    ngOnInit(): void { }

    onSubmit() {
        this.albumService.addAlbum(this.albumForm.value).subscribe(() => {
            // navigates back to homepage
            this.router.navigateByUrl('/')
        })
    }
}