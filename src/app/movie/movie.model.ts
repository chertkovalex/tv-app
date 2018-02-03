import {Poster} from './poster';

export class Movie {
  name: string;
  id: string;
  poster: Poster;

  constructor(params: any) {
    this.id = params.id;
    this.name = params.name;
    this.poster = params.poster;
  }
}
