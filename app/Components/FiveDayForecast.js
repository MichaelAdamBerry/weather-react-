import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day.js';
import helpers from '../utils/helpers.js';



class FiveDayForecast extends React.Component {
  render() {
    const weatherData = this.props.location.state.weatherData.weatherData;
    const weatherDataArray = weatherData.list;
    // array elements contain weather data for  every three hours
    //fiveDayArray will start with weatherData.list[0], [8] and so on
    const fiveDayArray = weatherDataArray.filter(function(elements, index) {
	    return index % 8 === 0;
    });
    const dateList = fiveDayArray.map(function(element) {
      return element.dt_txt
    });
    console.log('five day forecast did mount');
    console.log(fiveDayArray);
    console.log(dateList);

    const city = weatherData.city.name

    //fiveDayForecast array.map and call the Day component passing appropriate props
    const fiveDayJsx = fiveDayArray.map(function(day, index) {
      let dateString = day.dt
      let formattedDate = helpers.formatDate(dateString)
      let temp = day.main.temp
      let formattedTemp = helpers.kelvinToFahrenheit(temp)
      let description = day.weather[0].description
      let iconID = day.weather[0].icon
      let icon = helpers.makeIconUrl(iconID)
      return (
        <div className='scrollingItem' key={dateString} >
          <li className='dayContainer'>
            <Day
              formattedDate={formattedDate}
              city={city}
              formattedTemp={formattedTemp}
              description={description}
              icon={icon}
            />
          </li>
        </div>
      )
    })

    return(
    <div className='fiveDayForecast'>
      <ul className='scrollingWrapper'>{fiveDayJsx}</ul>
    </div>

    )
  }
}

FiveDayForecast.propTypes = {
  weatherData: PropTypes.object
}

export default FiveDayForecast;
