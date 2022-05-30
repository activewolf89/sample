import cookie from 'react-cookies'

export default function(array){
  var browseCookie = cookie.loadAll()['browse']
  var idx = 0;
    array.forEach((option,newIdx)=>{
      if(option === browseCookie){
        idx = newIdx
      }
    })
  return idx
}
