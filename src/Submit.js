import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

class Submit extends Component {
  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="name">Full Name</Label>
          <Input type="text" name="name" id="name" placeholder="Type Your Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />

        </FormGroup>
        <FormGroup tag="fieldset">

          <FormGroup check>
            <Label for="radio-btn" check>Male &nbsp;</Label>
            <Input id="radio-btn" type="radio" name="btn-radio" />
          </FormGroup>
          <FormGroup check>
            <Label for="radio-btn1" check>Female &nbsp;</Label>
            <Input id="radio-btn1" type="radio" name="btn-radio"/>
          </FormGroup>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Submit;