import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TodaysForecast from './TodaysForecast.js';
import SubmitForm from '../utils/SubmitForm.js';
import Form from '../utils/Form.js';
import TitleBar from './TitleBar.js';

// home should have a form for user to imput zipcode

// once the zipcode is submitted it should render TodaysForecast component
  //onSubmit if this.state.zipcode  is truthy, render TodaysForecast
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zipcode: '',
      submitted: false
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState( function() {
      return {
        zipcode: value
      }
    });
  }
  handleSubmit(event) {
    let value = event.target.value;
    console.log('submitted!');
    this.setState(function () {
      return {
        zipcode: value,
        submitted: true
      }
    });
  }

   render() {
     const isSubmitted = this.state.submitted;
     let formStatus;
     const zip = this.state.zipcode;
     const path = 'forecast/weather';
     const handleChange = this.handleChange;
     const handleSubmit = this.handleSubmit;


     if (isSubmitted) {
      formStatus  = <SubmitForm
          state={zip} path={path}/>;
     } else {
       formStatus = <Form
          handleSubmit={handleSubmit}
          zip={zip}
          handleChange={handleChange}/>
     }

     return (

       <div>
         <TitleBar />
         {formStatus}
       </div>
     );

   }



}
export default Home;
