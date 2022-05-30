module.exports = function(day,fromCalendar){
var today;
  if(day){
    today = new Date(day)
  } else {
    today = new Date()
  }
  var dayToDeliver = today;
  if(fromCalendar){

  } else {

  if(day === "0"){
    dayToDeliver.setDate(dayToDeliver.getDate() + 3);
  }
  else if(day === 1 || day === 2 || day === 3 || day === 4){
    dayToDeliver.setDate(dayToDeliver.getDate() + 2);
    //tuesday or wednesday.
  }  else if(day === 5){
    //friday
    dayToDeliver.setDate(dayToDeliver.getDate() + 3);

  } else {
    //saturday
    dayToDeliver.setDate(dayToDeliver.getDate() + 5);
  }
}

  return  'on a ' + getDay2(dayToDeliver.getDay()) + ' in ' + generateHowLongFromNow(dayToDeliver) + " days," + getFormattedDate(dayToDeliver)+"."

   function generateHowLongFromNow(dayFromNow){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var secondDate = dayFromNow;

    var firstDate = new Date();
    var count = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    if(!fromCalendar){
      return count
    }
    if(count === 1){
      return 2
    }

     else {
        return count + 1
    }

  }
  function getDay2(day){
    switch(day){
      case 0:
      return 'Sunday'
      case 1:
      return 'Monday'
      case 2:
      return 'Tuesday'
      case 3:
      return 'Wednesday'
      case 4:
      return 'Thursday'
      case 5:
      return 'Friday'
      case 6:
      return 'Saturday'
      default:
      return 'Sunday'
    }
  }


  function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}


}
