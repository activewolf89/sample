module.exports = function(date){
  let dateGroupings = date.split(',');
  var targetDate = '';
  var today = new Date().setHours(0,0,0,0);
  dateGroupings.forEach((specificDate)=>{
    let compareDates = specificDate.split('-')
    var cD1 = new Date(compareDates[0]).setHours(0,0,0,0);
    var cD2 = new Date(compareDates[1]).setHours(0,0,0,0);
    if(cD1 <= today){
      //should trigger
      if(cD2 > today){
        //push into target date.
        targetDate = compareDates[1]
      }
    }
  })




    var d1 = new Date(targetDate);
    if(d1 >= today){
      return true
  } else {
    return false
  }

}
