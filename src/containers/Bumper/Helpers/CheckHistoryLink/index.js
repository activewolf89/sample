module.exports = function(pathname){
  var lowerCase = pathname.toLowerCase()
  if(lowerCase.includes('engagement-rings')){
    return 'Engagement Rings'
  }
  else if(lowerCase.includes('loose-diamond')){
    return "Loose Diamonds"

  } else if(lowerCase.includes('ladies-band')){
    return "Ladies Bands"

  } else if(lowerCase.includes('mens-band')){
    return "Mens Bands"

  } else if(lowerCase.includes('necklace')){
    return "Necklaces"

  } else if(lowerCase.includes('earring')){
    return "Earrings"

  } else if(lowerCase.includes('bracelet')){
    return "Bracelets"

  } else if(lowerCase.includes('fine-ring')){
    return "Fine Rings"

  } else if(lowerCase.includes('watch')){
    return "Watches"

  } else if(lowerCase.includes('other')){
    return "Other"
  } else {
    return "Show All"
  }


}
