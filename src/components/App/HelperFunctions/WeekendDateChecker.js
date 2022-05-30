
module.exports = {
  WeekendDateOpenerChecker: (day)=>{
    if(day.getDay() === 6){
      return "11:00 AM"
    } else {
    return "10:00 AM"
  }
  },
  WeekendDateCloserChecker: (day)=>{
    if(day.getDay() === 6){
      return "05:00 PM"
    } else {
    return "05:30 PM"
  }
  }
}
