import React, { Component } from "react";
import Form from '../commons/Form';
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () =>{
    //Call the server
    console.log(`submitted`);
  }
  
  render() {
    
    return (
      <div className='w-4/5 mx-auto pt-8'>
        <div>
          <h1 className='text-4xl font-semibold mb-6'>Login</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username','Username')}
          {this.renderInput('password','Password', 'password')}
          {this.renderButton('Submit')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
