
export default function(isClosed){
  var openDays = [
    {day:2,hours:[10,18],minutes:0},
    {day:3,hours:[10,18],minutes:0},
    {day:4,hours:[10,18],minutes:0},
    {day:5,hours:[10,18],minutes:0},
    {day:6,hours:[11,17],minutes:.5},
  ]
  var today = new Date();
  var isOpen = false;
  const hours = today.getHours()
  //check if we are currently open
  openDays.forEach((obj)=>{
    if(today.getDay() === obj.day){
      const openTime = obj.hours[0]
      const closedTime = obj.hours[1] + obj.minutes
      if(hours >= openTime){
        //past 10am, now check if less than
        if(hours < closedTime){
          //we know its earlier than 10am, now we need if hours < close dtime
          isOpen = true;
        }
        //10 <= 20,
      }
    }
  })
  if(isClosed){
    return false
  } 
return isOpen;
};
