module.exports = {
  getEarlyTime: function(date){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes()
    if(hours > 10 && hours < 18 && (today.toDateString() === date.toDateString())){

      return (minutes <= 30 ? hours.toString():(1 + hours).toString()) + (minutes <= 30 ? ':30':':00')
    } else {
      return "10:00AM"

    }
  },
  getLaterTime: function(){
    var hours = "17:00";
    return hours
  }
}
