import React, {Component} from 'react';
import {getMovies, getMovie, getGenres} from '../../services/fakeMovieService';
import MovieRow from './movieRow/MovieRow';
import Pagination from '../commons/pagination/Pagination';
import paginate from '../../utils/paginate';
import ListGroup from '../commons/pagination/ListGroup';
import {Link} from 'react-router-dom';

class Movie extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    selectedGenre: null,
    perPageLimit: 4,
    currentPage: 1
  }

  toggleFav = (movie) =>{
    const index = this.state.movies.indexOf(movie);
    const movies = [...this.state.movies];
    movies[index] = {...movie};
    movies[index].isFav = !movies[index].isFav;
    this.setState({movies});
  }

  handlePageChange = (page) =>{
    this.setState({currentPage:page});
  }

  handleGenreSelect = (genre) =>{
    this.setState({selectedGenre:genre, currentPage: 1});
  }
  render(){
    const {movies, perPageLimit, currentPage, genres, selectedGenre} = this.state;
    const filteredMovies = selectedGenre && selectedGenre._id? movies.filter(m=>m.genre._id===selectedGenre._id): movies;
    const moviesPerPage = paginate(filteredMovies, currentPage, perPageLimit);
    return(
      <div className='flex space-x-20'>
        <div>
          <ListGroup
          items = {genres}
          selectedItem = {selectedGenre}
          onSelectItem = {this.handleGenreSelect}
          />
        </div>
        <div className='w-full'>
          {this.renderTable(moviesPerPage, filteredMovies.length)}
          <Pagination
          totalMovies={filteredMovies.length}
          perPageLimit={perPageLimit}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
  renderTable(moviesPerPage, totalGenreLength){
    if(this.state.movies.length){
      return(
        <div className="m-10 ">
          <div>
            <Link to='/movie/new'><button className='btn btn-primary'>Add New Movie</button></Link>           
          </div>
          <p className='mt-6'>Showing {totalGenreLength} movies in the database.</p>
          <table className='border-collapse text-left text-xl my-4 w-full'>
            <thead>
              <tr className='border-y-2'>
                <th className='py-3 pr-48 '>Title</th>
                <th className='pr-16'>Genre</th>
                <th className='pr-16'>Stock</th>
                <th className='pr-16'>Rate</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            
            <tbody>
              {moviesPerPage.map(movie=>{
                return (
                  <MovieRow
                  key={movie._id} 
                  movie={movie}
                  onToggleFav={this.toggleFav}
                  onDelete={this.handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }else{
      return(
        <p>There is no movies</p>
      );
    }
  }



  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m)=>{
     return m._id !== movie._id;
    });
    this.setState({movies});
  }
}

export default Movie;

