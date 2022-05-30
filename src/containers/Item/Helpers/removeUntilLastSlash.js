export default function(pathname){
  
  var index = pathname.indexOf('/item-')
  var stringSlice = pathname.slice(0,index)
  return stringSlice
}
