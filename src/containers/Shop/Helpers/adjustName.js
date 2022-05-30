
export default function(string){
  string = string.toLowerCase()
  if(string === 'pendant'){
    return 'Necklaces'
  }
  else if(string === 'earring'){
    return 'Earrings'
  }
  else if(string === 'bracelet'){
    return 'Bracelets'
  }
  else if(string === 'fine-ring'){
    return 'Fine Rings'
  }
  else if(string === 'watch'){
    return 'Watches'
  }
  else if(string === 'ladies-band'){
    return 'Ladies Bands'
  }
  else if(string === 'mens-band'){
    return 'Mens Bands'
  }
  else if(string === 'engagement-rings'){
    return 'Engagement Rings'
  }
  else if(string === 'diamond'){
    return 'Loose Diamonds'
  }
  else if(string === 'treasure-chest'){
    return 'Treasure Chest'
  }
  else {
    return 'Other'
  }
};
