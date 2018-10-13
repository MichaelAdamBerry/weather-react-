import React, { Component } from 'react';
//import ReactRouter from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Weather from './Weather.js';
import Home from './Home.js';
import TodaysForecast from './TodaysForecast.js';
import FiveDayForecast from './FiveDayForecast.js';
import TwelveHourForecast from './TwelveHourForecast.js';



//make a Results component that


class App extends React.Component {

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/forecast/weather' component={Weather} />
            <Route exact path='/forecast/weather/today' component={TodaysForecast} />
            <Route exact path='/forecast/weather/today/expand' component={TwelveHourForecast} />
            <Route exact path='/forecast/weather/five-day' component={FiveDayForecast} />
            <Route render={function () {
                return <p>Not Found</p>
              }} />
          </Switch>
      </Router>
    )
  }
}

export default App;
