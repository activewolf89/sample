module.exports = {
  getEarlyTime: function(date){
    var today = new Date();
    var hours = today.getHours();
    hours = hours > 12 ? hours %12 : hours;
    var minutes = today.getMinutes()
    if(hours > 10 && hours < 18 && (today.toDateString() === date.toDateString())){
      return (minutes <= 30 ? hours.toString() :(1 + hours).toString()) + (minutes <= 30 ? ':30' + FindAMORPM(hours):':00' + FindAMORPM(hours))
    } else {
      if(date.getDay() === 6){
        return "11:00AM"
      } else {
        return "10:00AM"
      }

    }
  },
  getLaterTime: function(){
    var hours = "17:00";
    return hours
  }
}

function FindAMORPM(hours){
  if(hours + 1 >=12){
    return "PM"
  } else {
    return "AM"
  }
}
