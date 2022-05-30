export default function(obj,max){
  if(max){
    var todayPlusTwoWeeks = new Date();
    var numberOfDaysToAdd2 = 14;

    todayPlusTwoWeeks.setDate(todayPlusTwoWeeks.getDate() + numberOfDaysToAdd2);
    if(obj.date >= todayPlusTwoWeeks){
      return true
    }
  }


  if(obj.date.getDay() === 0 || obj.date.getDay() === 1){
    return true;
  } else {
    //check if today
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate() - 1;
    var year = dateObj.getUTCFullYear();
    var checkMonth = obj.date.getUTCMonth() + 1; //months from 1-12
    var checkDay = obj.date.getUTCDate();
    var checkYear = obj.date.getUTCFullYear();
    var newdate = year + "/" + month + "/" + day;
    var checkDate = checkYear + "/" + checkMonth + "/" + checkDay;

    if(newdate === checkDate){
      if(new Date().getHours() > 17){
        return true;
      }
    } else {
      return false;
    }
  }
}
