import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchTextPipe } from './shared/search-text.pipe';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {MovieItemComponent} from './movie/movie-item/movie-item.component';
import {MovieService} from './movie/movie.service';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { SelectedMovieComponent } from './movie/selected-movie/selected-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchTextPipe,
    MovieListComponent,
    MovieItemComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
