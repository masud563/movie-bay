import React, { Component } from 'react';
import Input from '../commons/Input';
import Joi from 'joi-browser';

class Form extends Component {
  state = {
    data: {},
    errors:{}
  }

  validate = () => {
    const options = { abortEarly: false, allowUnknown: true };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if(!error) return null;

    const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }  
      console.log(errors)  
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;   
    this.doSubmit();
  };

  handleInputChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label){
    return(
      <div>
        <button
          disabled={this.validate()} 
          className={this.validate()?'btn btn-primary mt-4 opacity-50' : 'btn btn-primary mt-4'}>
          {label}
        </button>
      </div>
      
    );
  }

  renderInput(name, label, type='text'){
    const { data, errors } = this.state;
    return(
      <Input
            type={type}
            name={name}
            label={label}
            value={data[name]}
            error={errors[name]}
            onChange={this.handleInputChange}
          />
    );
  }

}

export default Form;