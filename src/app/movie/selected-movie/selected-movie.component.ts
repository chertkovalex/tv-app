import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../movie.service';
import {Movie} from '../movie.model';


@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {

  movie: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.movieService.getMovie(id)
          .subscribe(m => this.movie = m);
      }
    });
  }

}
