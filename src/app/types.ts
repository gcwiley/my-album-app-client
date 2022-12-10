export interface Album {
    _id: string;
    title: string;
    artist: string;
    releaseDate: string,
    label: string,
    studio: string,
    genre: string;
    summary: string,
    imageUrl: string;
}

export interface Genre {
    value: string;
    viewValue: string;
}

export interface User {
    _id: string;
    name: string;
    password: string
}