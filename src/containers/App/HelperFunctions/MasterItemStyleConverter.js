export default function(item){
  if(item){

  const vendor = item.ItemVendorName
  const style = AdjustedStyle(item.ItemVendStyleCode)

  if(vendor === 'Memoire' || vendor === 'MEM' || style.toLowerCase() === "guardbands"){
    return Exceptional(item)
  } else {
    return style
  }
} else {
  return 'unknown'
}


}



  var Exceptional = function(item){
    const vendor = item.ItemVendorName
    const style = AdjustedStyle(item.ItemVendStyleCode)
    const color = item.ItemMetalColor.toLowerCase()
    const description = item.SearchableSentence
    var FindMetal = function(color){
          if(color.includes('white') || color == ''){
            return 'white'
          } else if(color.includes('rose')){
            return 'rose'
          }  else {
            return 'yellow'
          }
      var lDescription = description.toLowerCase()

      if(lDescription.includes('yellow')){
        return 'yellow'
      } else if(lDescription.includes('rose')){
        return 'rose-gold'
      }else if(lDescription.includes('platinum')){
        return 'platinum'
      } else {
        return 'white-gold'
      }

    }
    return style + '-' + FindMetal(color)
  }

var AdjustedStyle = function(style){
  return style.split(' ').join('').replace(/\)/g, '').replace(/\(/g, '').replace(/\\/g, '').replace(/\#/g, '').replace(/\*/g, '').replace(/\//g, "").replace(/;/g, "").replace(/:/g, "").replace(/,/g, "")
}
