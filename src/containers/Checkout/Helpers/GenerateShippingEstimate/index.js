module.exports = function(day,fromCalendar,appointment){
var today;
  if(day){
    today = new Date(day)
  } else {
    today = new Date()
  }
   day = today.getDay();
  var dayToDeliver = today;

  if(fromCalendar){
    if(appointment){
      var date = new Date();
      var day2 = new Date();
      day2.setDate(date.getDate()+1
    )
      day2.setHours(0)
      day2.setMinutes(0)
      day2.setSeconds(0)
      day2.setMilliseconds(0)
      date.setHours(0)
      date.setMinutes(0)
      date.setSeconds(0)
      date.setMilliseconds(0)
      if(date.getTime() === dayToDeliver.getTime()){
        return 'today, ' + getFormattedDate(date) + "."
      } else if(day2.getTime() === dayToDeliver.getTime()){
        return 'tomorrow, ' + getFormattedDate(day2) + "."
      } else {
      return  "on a " + getDay2(day) + " in " + generateHowLongFromNow(dayToDeliver) + " days, " + getFormattedDate(dayToDeliver)
    }
    } else {
      return   "on a " + getDay2(day) + " in " + generateHowLongFromNow(dayToDeliver) + " days, " + getFormattedDate(dayToDeliver)
    }

  } else {

  if(day === 1){
    //monday
    day = 4
    dayToDeliver.setDate(dayToDeliver.getDate() + 3);
  }
  else if( day === 2 ){
    //tuesday
    day = 4
    dayToDeliver.setDate(dayToDeliver.getDate() + 2);
  }   else if(day === 3){
    //wednesday.
      day = 5;
      dayToDeliver.setDate(dayToDeliver.getDate() + 2);
    }  else if(day === 4){
      //thursday
    day = 1
    dayToDeliver.setDate(dayToDeliver.getDate() + 4);
  }  else if(day === 5){
    //friday
  day = 4
  dayToDeliver.setDate(dayToDeliver.getDate() + 6);
}  else if(day === 6){
  //saturday
    day = 4
    dayToDeliver.setDate(dayToDeliver.getDate() + 5)

    // dayToDeliver.setDate(Modulus(dayToDeliver.getDate(),5));
  } else {
    day = 4
    dayToDeliver.setDate(dayToDeliver.getDate() + 4)
    // module.exports = function(day,amount){
    //   return ((day + amount)%6)
    //
    // }

    //sunday
  }
  return "on a " + getDay2(day) + ' in ' + generateHowLongFromNow(dayToDeliver) + " days, "  + getFormattedDate(dayToDeliver)
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



  function getFormattedDate(date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}


}
