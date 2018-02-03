import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie.model';

import 'rxjs/add/operator/map';
import {Poster} from './poster';


@Injectable()
export class MovieService {
  private moviesUrl = 'http://api.tvmaze.com/search/shows?q=';
  private selMovieUrl = 'https://api.tvmaze.com/shows/';

  constructor(private http: HttpClient) {
  }

  getMovies(text): Observable<Movie[]> {
    return this.http.get<any>(this.moviesUrl + text).map(res => {
      return res.map(m => {
        const {id, name, image} = m.show;
        return new Movie({id, name, poster: (image ? new Poster(image.medium, image.original) : null)});
      });
    });
  }

  getMovie(movieId): Observable<Movie> {
    return this.http.get<any>(this.selMovieUrl + movieId).map(res => {
      const {id, name, image} = res;
      return new Movie({id, name, poster: (image ? new Poster(image.medium, image.original) : null)});
    });
  }

}
