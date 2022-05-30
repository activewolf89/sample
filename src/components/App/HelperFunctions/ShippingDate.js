export default function(obj){
  console.log(obj)
  var today = new Date();
   today.setHours(0)
   today.setMinutes(0)
   today.setSeconds(0)
   today.setMilliseconds(0)
  var todayPlusTwoWeeks = new Date();
  var whatDay =  today.getDay()
  var howManyToAdd = getDay2(whatDay);
  var numberOfDaysToAdd2 = 14;

  today.setDate(today.getDate() + howManyToAdd);
  todayPlusTwoWeeks.setDate(todayPlusTwoWeeks.getDate() + numberOfDaysToAdd2);

  var dateToCheck = new Date(obj.date)

  if(dateToCheck >= todayPlusTwoWeeks){
    return true;
  }
  if(obj.date.getDay() === 6 || obj.date.getDay() === 0){
    return true;
  }
  if(dateToCheck >= today){
    return false;
  } else {
    console.log(dateToCheck)
    console.log(today)
    return true
  }
}

function getDay2(day){
  switch(day){
    case 0:
    return 4
    case 1:
    return 3
    case 2:
    return 2
    case 3:
    return 2
    case 4:
    return 4
    case 5:
    return 3
    case 6:
    return 5
    default:
    return 4
  }
}
