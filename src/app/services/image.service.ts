import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import the image interface
import { Image } from '../types/image.interface';

@Injectable({
	providedIn: 'root',
})
export class ImageService {
	private imagesUrl = '/api/images'; // URL to web api

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(private http: HttpClient) {}

	// GET: all images from the server
	getImages(): Observable<Image[]> {
		return this.http.get<Image[]>(this.imagesUrl);
	}

	// POST: add a new image to the server
	uploadImage(formData: FormData): Observable<void> {
		return this.http.post<void>('/api/upload', formData);
	}
}
