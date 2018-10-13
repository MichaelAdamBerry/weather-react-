
module.exports = {

  makeIconUrl : (iconID) => {
   const iconURL = 'http://openweathermap.org/img/w/';
   const iconType = '.png';
   return iconURL + iconID + iconType;
  },

  kelvinToFahrenheit: (kelvinTemp) => {
     const fahreneit = (kelvinTemp * 1.8) - 459.67;
     const fahreneitFormatted = Math.round(fahreneit * 10) / 10;
     return fahreneitFormatted;
   },

  formatDate: (dateString) => {
      //new date object
      const date = new Date(dateString * 1000);
      //getmonth to find month in month array
      const monthList = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'];
      const monthNameIndex = date.getMonth(); //returns num 0-11
      const formattedMonth = monthList[monthNameIndex];
      //get day  to find the weekday in weekday array
      const weekDayList = ['Sunday', 'Monday', 'Tuesday', 'Wedenesday', 'Thursday', 'Friday', 'Saturday'];
      const weekdayIndex = date.getDay();
      const weekday =  weekDayList[weekdayIndex];
      const dateNum = date.getDate();
      const formattedDate = weekday + ', ' + formattedMonth + ' ' + dateNum;
    return formattedDate;
  },

  isNight: (dateString) => {
    const date = new Date(dateString * 1000);
    const hours = date.getHours();
    return hours < 5 || hours > 21 ? true : false;

  },

  formatTime: (dateString) => {
    let date = new Date(dateString * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 0;
    hours = hours ? hours : 12; // zero is 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
};
