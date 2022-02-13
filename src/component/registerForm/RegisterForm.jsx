import React, { Component } from 'react';
import Form from '../commons/Form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
  
  state = {
    data:{
      username:'',
      password:'',
      name:''
    },
    errors:{}
  }

  schema ={
    username: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().required()
  }

  doSubmit = () =>{
    //Call the server
    console.log(`registration initiated`);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className='text-4xl font-semibold mb-6'>Register</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username','Username','email')}
          {this.renderInput('password','Password', 'password')}
          {this.renderInput('name','Name')}
          {this.renderButton('Register')}
        </form>
      </React.Fragment>    
    );
  }
}

export default RegisterForm;