import {Poster} from './poster';

export class Movie {
  genres: Array<string>;
  id: string;
  name: string;
  poster: Poster;
  summary: string;

  constructor(params: any) {
    this.genres = params.genres;
    this.id = params.id;
    this.name = params.name;
    this.poster = params.poster;
    this.summary = params.summary;
  }
}
