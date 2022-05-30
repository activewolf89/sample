export default function(pathname,choice){
  if(pathname.includes('engagement-rings')){
    if(choice ==="Engagement Rings"){
      return 140
    } else {
      return false
    }
  } else if(pathname.includes('loose-diamonds')){
    if(choice ==="Loose Diamonds"){
      return 190
    } else {
      return false
    }
}  else if(pathname.includes('ladies-bands')){
  if(choice ==="Ladies Bands"){
    return 115
  } else {
    return false
  }
} else if(pathname.includes('mens-bands')){
  if(choice ==="Mens Bands"){
    return 110
  } else {
    return false
  }
}  else if(pathname.includes('fine-rings')){
  if(choice ==="Fine Rings"){
    return 130
  } else {
    return false
  }
} else if(pathname.includes('necklaces')){
  if(choice ==="Necklaces"){
    return 165
  } else {
    return false
  }
} else if(pathname.includes('earrings')){
  if(choice ==="Earrings"){
    return 150
  } else {
    return false
  }
} else if(pathname.includes('bracelets')){
  if(choice ==="Bracelets"){
    return 170
  } else {
    return false
  }
} else if(pathname.includes('watches')){
  if(choice ==="Watches"){
    return 500
  } else {
    return false
  }
} else if(pathname.includes('other')){
  if(choice === "Other"){
    return 999
  } else {
    return false
  }
}  else {
    if(choice === "Show All"){
      return 'All'
    }
  }

}
