import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MovieRow extends Component {
  render() { 
    const movie = this.props.movie;
    return (
      <React.Fragment>
        <tr key={movie._id} className='border-y-2'>
                  <td className='py-4'>
                    <Link to={`/movie/${movie._id}`} className='text-blue-600 underline' > {movie.title} </Link>
                    </td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td >
                  <i
                  onClick={()=>this.props.onToggleFav(movie)} 
                  className={this.formatFav(movie)}></i>
                  </td>
                  <td>
                    <button 
                    onClick={()=>this.props.onDelete(movie)} className='btn btn-danger'
                    >Delete</button>
                  </td>
      </tr>
      </React.Fragment>
    );   
  }
  formatFav(movie){
      if(movie.isFav){
        const liked= 'fas fa-heart pr-16 cursor-pointer';
        return liked;
      }else{
        return ('far fa-heart pr-16 cursor-pointer');
      }
    }
}
 
export default MovieRow;