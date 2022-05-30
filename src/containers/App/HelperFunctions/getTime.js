module.exports = {
  getEarlyTime: function(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes()
    return (minutes <= 30 ? hours.toString():(1 + hours).toString()) + (minutes <= 30 ? ':30':':00')
  },
  getLaterTime: function(){
    var hours = "17:30";
    return hours
  }
}
