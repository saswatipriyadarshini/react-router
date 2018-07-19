import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';
import FormElement from "./common/FormElement";

class Submit extends Component {
  constructor(props){
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      user_details: {
        email: "",
        name: "",
        password: "",
        disable_submit: true,
        errors: {
          email: '',
          password: '',
          name: ''
        }
      }
    }
  }

  changeHandler(e){
    //Take input's value and set it against the state's user_Details

    let input = e.currentTarget;

    let input_value = input.value;
    let name = input.name;

    // this.state.user_details[name] = input_value;

    let new_user_details = Object.assign({}, this.state.user_details);

    new_user_details[name] = input_value;

    this.setState({user_details: new_user_details});

    console.log("New", new_user_details);

    this.validate(name);
  }

  validate(name){
    if(name === 'email'){
      let email = this.state.user_details[name];

      let valid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);

      // console.log("Valid:", valid, email);
      // console.log("email", email);
      let new_user_details = Object.assign({}, this.state.user_details);
      if(valid){
        new_user_details.errors.email = '';
      } else {
        new_user_details.errors.email = 'Please Enter a valid email id';
      }

      console.log("user_details", new_user_details);

      this.setState({user_details: new_user_details});

    } else if (name === 'password'){
      let password = this.state.user_details[name];

      let valid = false;

      if(password.length >= 8){
        valid = true;
      }

      // console.log("Valid:", valid, password);

      let new_user_details = Object.assign({}, this.state.user_details);

      if(valid){
        new_user_details.errors.password = '';
      } else {
        new_user_details.errors.password = 'Please Enter at least 8 chars';
      }

      this.setState({user_details: new_user_details});

      //validate for password
    }


  }


  render(){
    return(
      <Form>
        <FormElement
          type='text'
          id='email'
          className='form-control'
          placeholder='This is a placeholder'
          inputname='email'
          name='Saswati'
          value={this.state.user_details.email}
          changeHandler={this.changeHandler}
          error={this.state.user_details.errors.email}
        />

        <FormElement
          type='password'
          id='password'
          className='form-control'
          placeholder='********'
          inputname='password'
          name='Password'
          value={this.state.user_details.password}
          changeHandler={this.changeHandler}
          error={this.state.user_details.errors.password}
        />

        <FormElement
          type='text'
          id='name'
          className='form-control'
          placeholder='Your name'
          inputname='name'
          name='Your name please'
          value={this.state.user_details.name}
          changeHandler={this.changeHandler}
          error={this.state.user_details.errors.name}
        />


        <button disabled={this.state.user_details.disable_submit}>Submit FOrm</button>
      </Form>
    );
  }
}

export default Submit;