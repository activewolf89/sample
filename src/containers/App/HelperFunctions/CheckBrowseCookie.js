import cookies from 'react-cookies'
  var options = [
    'engagement-rings',
    'diamonds',
    'ladies-bands',
    'mens-bands',
    'necklaces',
    'earrings',
    'bracelets',
    'watches',
    'fine-rings',
    'other',
  ]


export default function(){
  var selected = false;
  var cookieString = cookies.loadAll()['browse'];
  if(cookieString){
    options.forEach((option)=>{
      if(cookieString === option){
         selected = option
      }
    })
    if(cookieString === 'others'){
      return 'other'
    }
     selected = selected ? selected: 'engagement-rings'
     if(selected === "wedding-bands"){
       selected = 'ladies-bands'
     }
     if(selected === "fine-jewelry"){
       selected = 'earrings'
     }
    return selected
  } else {
    return 'Show All'
  }


}
