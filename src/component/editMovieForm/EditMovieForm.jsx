import React, { Component } from "react";
import Form from "../commons/Form";
import Joi from "joi-browser";
import { getMovie, getGenres, editMovie } from "../../services/fakeMovieService";

class EditMovieForm extends Form {
  state = {
    data: getMovie(Number(this.props.match.params.id)),
    errors: {},
  };

  schema = {
    title: Joi.string().required(),
    genre: Joi.required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    dailyRentalRate: Joi.number().min(0).max(10).required(),
  };

  

  doSubmit = () => {
    //Call the server
    editMovie(this.state.data);
    this.props.history.push('/movie')
  };

  renderDropdown(selectedGenre) {
    const allGenres = getGenres().filter(
      (genre) => genre.name !== "All Genres"
    );
    
    return (
      <div className='mt-4'>
        <label htmlFor='genre'>Genre</label>
        <select
          name='genre'
          defaultValue={selectedGenre}
          onChange={this.handleInputChange}
          className='w-full h-10 rounded mt-2 border-2 bg-white'
        >
          {allGenres.map((genre) => {
            return (
              <option key={genre._id} value={genre.name}>
                {genre.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className='text-4xl font-semibold mb-6'>Edit Movie</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropdown(this.state.data.genre.name)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default EditMovieForm;
