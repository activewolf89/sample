export default function(startDate,endDate){

  if(startDate !== undefined && endDate !== undefined){
  var dateFrom = startDate;
  var dateTo = endDate;
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
 today = mm + '/' + dd + '/' + yyyy;

  var d1 = dateFrom.split("/");
  var d2 = dateTo.split("/");
  var c = today.split("/");

  var from = new Date(d1[2], Number(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
  var to   = new Date(d2[2], Number(d2[1])-1, d2[0]);
  var check = new Date(c[2], Number(c[1])-1, c[0]);

  return check >= from && check <= to;
} else {
  return false;
}

};
