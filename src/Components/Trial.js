import React, { Component } from 'react';

class Trial extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_details: {
        name: 'Saswati',
        age: 26,
        my_details: {
          sex: "Female"
        }
      }
    };


    this.changeName = this.changeName.bind(this);
  }

  changeName(){
    console.log("Changing name");
    let new_user_details = {
      name: "Kumar",
      age: 27,
      my_details: {
        sex: "Male"
      }
    };


    this.setState({user_details: new_user_details});
    // this.state.user_details = new_user_details;

    // console.log("Updated details are ", this.state.user_details);
  }

  render(){
    return(
      <div className="home-wrapper">
        <h2>Trial this.x.name {this.state.user_details.name}</h2>
        <h3>& My Age is {this.state.user_details.age}</h3>

        <h4>My sex is {this.state.user_details.my_details.sex} </h4>

        <button onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}

export default Trial;
