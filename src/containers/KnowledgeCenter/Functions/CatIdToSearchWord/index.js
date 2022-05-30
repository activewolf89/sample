module.exports = function(catId){
  switch(catId){
    case 140:
    return `engagement-rings`
    case 110:
    return `gents-bands`
    case 115:
    return `ladies-bands`
    case 130:
    return `fine-rings`
    case 150:
    return `earrings`
    case 165:
    return `necklaces`
    case 170:
    return `bracelets`
    case 190:
    return `loose-diamonds`
    case 500:
    return 'watches'
    default:
    return `engagement-rings`
  }

}
