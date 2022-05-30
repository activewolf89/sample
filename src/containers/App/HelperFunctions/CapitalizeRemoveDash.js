export default function(stringName){
  return stringName.split('-').map((el)=>{
      var elSplit = el.split('')
      elSplit[0]= elSplit[0].toUpperCase()
      return elSplit.join('')
  }).join(' ')
}
