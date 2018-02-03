import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {SelectedMovieComponent} from './movie/selected-movie/selected-movie.component';


const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MovieListComponent},
  {path: 'mov/:id', component: SelectedMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
