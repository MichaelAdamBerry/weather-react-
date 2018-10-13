import React from 'react';
import PropTypes from 'prop-types';


class TitleBar extends React.Component {
  render() {
    return(
      <div className='titleBar'>
        <h1 className='title'>{this.props.title}</h1>
        <h3 className='cityTitle'>{this.props.city}</h3>
      </div>
    )
  }
}

TitleBar.propTypes = {
  city: PropTypes.string,
  title: PropTypes.string.isRequired
}

TitleBar.defaultProps = {
  title: 'React Weather App'
}

export default TitleBar;
