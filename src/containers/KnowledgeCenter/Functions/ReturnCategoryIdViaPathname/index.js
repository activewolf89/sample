module.exports = function(pathname){
    if(pathname.includes('engagement-rings')){
      return 140
    } else if(pathname.includes('loose-diamonds')){
      return 190

    }else if(pathname.includes('ladies-bands')){
      return 115
    }else if(pathname.includes('fine-rings')){
      return 130
    } else if(pathname.includes('earrings')){
      return 150
    }else if(pathname.includes('necklaces')){
      return 165

    }else if(pathname.includes('bracelets')){
      return 170
    }else if(pathname.includes('gents-bands')){
      return 110
    } else if(pathname.includes('watches')){
      return 500
    } else {
      return 999
    }
  }
