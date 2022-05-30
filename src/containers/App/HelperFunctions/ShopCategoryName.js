import CapitalizeRemoveDash from './CapitalizeRemoveDash.js';

export default function(catId){

  if(typeof catId === "number"){
switch(catId){
  case 140:
  return `Engagement Rings`
  case 110:
  return `Mens Bands`
  case 115:
  return `Ladies Bands`
  case 130:
  return `Fine Rings`
  case 150:
  return `Earrings`
  case 165:
  return `Necklaces`
  case 170:
  return `Bracelets`
  case 190:
  return `Diamonds`
  case 500:
  return 'Watches'
  case 999:
  return 'Other'
  default:
  return `Show All`
}
} else {
  var stringName = catId;
  return CapitalizeRemoveDash(stringName)
}

}
