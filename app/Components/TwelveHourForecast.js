import React from 'react';
import TodaysForecast from './TodaysForecast.js';
import helpers from '../utils/helpers.js';
import Day from './Day.js';
import Loading from '../utils/Loading.js';
import TitleBar from './TitleBar.js';

class TwelveHourForecast extends React.Component {
  render() {
    const weatherData = this.props.location.state.weatherData.weatherData;
    const twelveHourArray = weatherData.list.filter(function(forecast, index) {
      return index < 4
    });
    console.log(twelveHourArray);

    const twelveHourForecastJsx =
      twelveHourArray.map(function (forecast) {
        let temp = forecast.main.temp
        let dateString = forecast.dt
        let formattedTime = helpers.formatTime(dateString)
        let formattedTemp = helpers.kelvinToFahrenheit(temp)
        let iconID = forecast.weather[0].icon
        let icon = helpers.makeIconUrl(iconID)
        let isNight = helpers.isNight(dateString)
        let description = forecast.weather[0].description

      return (
        <div className='scrollingItem' key={dateString}>
          <li className='dayContainer'>
            <Day
              isNight={isNight}
              formattedTime={formattedTime}
              formattedTemp = {formattedTemp}
              icon = {icon}
              description = {description}
            />
          </li>
      </div>

      )
    });

    return (
    <div>
      <TitleBar />
      <div className='twelveHourForecast'>
        <ul className='scrollingWrapper'>{twelveHourForecastJsx}</ul>
      </div>
    </div>
    )
  }
}
export default TwelveHourForecast;
