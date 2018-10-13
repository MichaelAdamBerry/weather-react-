import React from 'react';
import PropTypes from 'prop-types';



function Day (props) {

  const nightImg ='https://static1.squarespace.com/static/58d2d1d003596ef5151dd694/t/5910e8f1f7e0ab3b19a63f81/1494280456718/stars2.jpg?format=1500w';
  const dayImg = 'https://www.rd.com/wp-content/uploads/2016/02/01-daylights-savings-time-opener.jpg';
  let backgroundImg = dayImg
  let color = 'black'

  const isNight = props.isNight

  if (isNight) {
    backgroundImg = nightImg
    color = 'white'
  };

  const styles = {
    content: {
      zIndex: '-1',
      backgroundImage: 'url(' + backgroundImg + ')',
      backgroundSize: 'cover',
      opacity: '0.8',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '10%',
      width: '50%',
      height: '60vh',
      border: '1px solid #ddd',
      borderRadius: '10px',
      display: 'grid',
      gridTemplateRows: '10% 10% 30% 10% 20%',
      gridTemplateColumns: '25% 50% 25%',
      color: color
    }
  }
  return (
    <div className='dayParent'>
      <div style={styles.content} className='day'>
        <div className='date'>{props.formattedDate}</div>
        <div className='time'>{props.formattedTime}</div>
        <div className='city'>{props.city}</div>
        <div className='temp'> {props.formattedTemp} &deg;F</div>
        <div className='description'>{props.description}</div>
        <img alt='weatherIcon' className='weatherIcon' src={props.icon} />
      </div>
  </div>
  )
}

Day.propTypes = {
  //dayTime: PropTypes.bool.isRequired,
  formattedTime: PropTypes.string,
  formattedDate: PropTypes.string,
  city: PropTypes.string,
  formattedTemp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,

};


export default Day;
