export default function(timeString){
var timeNumber = Number(timeString)
var subtract12 = timeNumber - 12;

if(subtract12 < 0){
  //am
  return timeNumber.toString() + "AM"
} else {
  //pm
  if(subtract12 === 0){
    return "12 PM"
  } else {
    return subtract12.toString() + "PM"
  }
}
};
