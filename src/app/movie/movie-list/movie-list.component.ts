import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  textParam: string;
  movies: Movie[];

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit() {
  }

  searchMovie() {
    this.movieService.getMovies(this.textParam).subscribe(res => {
      this.movies = res;
    });
  }

  keyDown(event) {
    if (event.keyCode === 13) {
      this.searchMovie();
    }
  }

  gotoDetail(movie: Movie): void {
    const link = ['/mov', movie.id];
    this.router.navigate(link);
  }


}
