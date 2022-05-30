module.exports = function(day,fromCalendar){
var today;
  if(day){
    today = new Date(day)
  } else {
    today = new Date()
  }
  var day = today.getDay();
  var dayToDeliver = today;
  if(fromCalendar){

  } else {

  if(day === "0"){
    dayToDeliver.setDate(dayToDeliver.getDate() + 3);
  }
  else if(day === 1 || day === 2){
    dayToDeliver.setDate(dayToDeliver.getDate() + 2);
    //tuesday or wednesday.
  } else if(day === 3){
    //thursday
    dayToDeliver.setDate(dayToDeliver.getDate() + 4);
  } else if(day === 4){
    //thursday
    dayToDeliver.setDate(dayToDeliver.getDate() + 3);
  } else if(day === 5){
    //friday
    dayToDeliver.setDate(dayToDeliver.getDate() + 3);

  } else {
    //saturday
    dayToDeliver.setDate(dayToDeliver.getDate() + 5);
  }
}

  return  generateHowLongFromNow(dayToDeliver) + " days from today on " + getFormattedDate(dayToDeliver)+"."

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
