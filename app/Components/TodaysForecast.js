import React from 'react';
import Day from './Day.js';
import helpers from '../utils/helpers.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TitleBar from './TitleBar.js';

class TodaysForecast extends React.Component {

  render() {
    const weatherData = this.props.location.state.weatherData.weatherData
    //gets datestring from props and formats the date 'weekday, day, month'
    //const weatherData = this.props.location.state.weatherData.weatherData
    const dateString = weatherData.list[0].dt
    const formattedDate = helpers.formatDate(dateString)

    const city = weatherData.city.name

    //gets temp from prop and converts to fahrenheit
    const temp = weatherData.list[0].main.temp
    const formattedTemp = helpers.kelvinToFahrenheit(temp)

    const description = weatherData.list[0].weather[0].description

    //gets urlID from props and builds the url for the img icon
    const iconID = weatherData.list[0].weather[0].icon
    const icon = helpers.makeIconUrl(iconID)

    const formattedTime = helpers.formatTime(dateString)

    console.log(city, temp, description,icon, formattedTime)

    return (
      <div>
        <TitleBar />
        <div className='dayContainer'>
          <Day
            time={formattedTime}
            formattedTime={formattedTime}
            formattedDate={formattedDate}
            city={city}
            formattedTemp={formattedTemp}
            description={description}
            icon={icon}
          />
        </div>
      </div>
    )
  }
}


export default TodaysForecast;
