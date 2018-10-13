import React from 'react';
import PropTypes from 'prop-types';
import TodaysForecast from './TodaysForecast.js';
import FiveDayForecast from './FiveDayForecast.js';
import TwelveHourForecast from './TwelveHourForecast.js';
import Loading from '../utils/Loading.js';
import TitleBar from './TitleBar.js';
import api from '../utils/api.js';
import { Route, Link, Redirect } from 'react-router-dom';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      loading: true,
      city: '',
    };

    this.updateData = this.updateData.bind(this);
  }


  componentDidMount() {
    this.updateData(this.props.location.state.zipcode)
  };

  updateData(zipcode) {
    this.setState(function () {
      return {
        //sets weatherData to empty string before api call
        weatherData: '',
        loading: true
      }
    });
    api.getForecast(zipcode)
      .then(function (weather) {
       console.log(JSON.stringify(weather.data.list[0]))
        this.setState(function () {
          return {
            weatherData: weather.data,
            loading: false,
            city: weather.data.city.name
          }
        });
      }.bind(this));
    }

  render() {
    const weatherData = this.state.weatherData
    const loading = this.state.loading
    let display
    const city = this.state.city

    // if the api call has returned a weather object ie - weatherData true and loading false
    //set up let display for Links to TodaysForecast and FiveDayForecast

  if (weatherData && !loading) {
    display =
      <div className='weatherButtons'>
        <Link
          className='button'
          to={{
            pathname: '/forecast/weather/today',
            state: {
              weatherData: {weatherData},
            }
          }}>
            Now
        </Link>

        <Link
          className='button'
          to={{
            pathname: '/forecast/weather/five-day',
            state: {
              weatherData: {weatherData}
            }
          }}>
            Five Day
        </Link>
        <Link
          className ='button'
          to={{
            pathname: '/forecast/weather/today/expand',
            state: {
              weatherData: {weatherData}
            }
          }}>
            Twelve Hour
        </Link>
       />
      </div>
    //if weatherData && !loading is falsy display set to Loading component
    } else {
      display = <Loading />
    }

    return (

      <div className='getWeather'>
        <TitleBar city={city} />
        {display}
      </div>
    )
  }
}

export default Weather;
