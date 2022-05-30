
export default function(pathname){

  var startString = pathname.indexOf('item-');
  var itemString = pathname.substring(startString + 5,pathname.length)
  return itemString

};
