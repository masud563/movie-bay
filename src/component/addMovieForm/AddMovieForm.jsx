import React, { Component } from "react";
import Form from "../commons/Form";
import Joi from "joi-browser";
import { addMovie, getGenres } from "../../services/fakeMovieService";

class AddMovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: "",
      rentalRate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required(),
    genre: Joi.string().min(1).required(),
    stock: Joi.number().min(0).max(100).required(),
    rentalRate: Joi.number().min(0).max(10).required(),
  };

  doSubmit = () => {
    //Call the server
    addMovie(
      this.state.data.title,
      this.state.data.genre,
      this.state.data.stock,
      this.state.data.rentalRate
    );
    this.props.history.push('/movie')
  };

  renderDropdown() {
    const allGenres = getGenres().filter(
      (genre) => genre.name !== "All Genres"
    );
    const { data, errors } = this.state;
    console.log(data);
    return (
      <div className='mt-4'>
        <label htmlFor='genre'>Genre</label>
        <select
          name='genre'
          onChange={this.handleInputChange}
          className='w-full h-10 rounded mt-2 border-2 bg-white'
        >
          <option value=""></option>
          {allGenres.map((genre) => {
            return (
              <option key={genre._id} value={genre.name}>
                {genre.name}
              </option>
            );
          })}
        </select>
        {errors.genre && <small className="bg-red-300 inline-block rounded px-2">{errors.genre}</small>}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className='text-4xl font-semibold mb-6'>Add New Movie</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropdown()}
          {this.renderInput("stock", "Number in Stock")}
          {this.renderInput("rentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </React.Fragment>
    );
  }
}

export default AddMovieForm;
