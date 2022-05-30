export default function(history,key,returnString,justSearchPart){

  if(key === "Shop All"){
  if(history.location.pathname === "/shop/engagement-rings"){
    history.push('/shop' + history.location.search)
  } else if(history.location.pathname === "/shop/loose-diamonds"){
  history.push('/shop' + history.location.search)
} else if(history.location.pathname === "/shop/wedding-bands/mens-bands"){
history.push('/shop/wedding-bands' + history.location.search)
} else if(history.location.pathname === "/shop/wedding-bands/ladies-bands"){
history.push('/shop/wedding-bands' + history.location.search)
} else if(history.location.pathname === "/shop/wedding-bands"){
history.push('/shop' + history.location.search)
}  else if(history.location.pathname === "/shop/fine-jewelry"){
history.push('/shop' + history.location.search)
} else if(history.location.pathname === "/shop/fine-jewelry/necklace"){
history.push('/shop/fine-jewelry' + history.location.search)
} else if(history.location.pathname === "/shop/fine-jewelry"){
history.push('/shop/fine-jewelry' + history.location.search)
}else if(history.location.pathname === "/shop/fine-jewelry/earring"){
history.push('/shop/fine-jewelry' + history.location.search)
}else if(history.location.pathname === "/shop/fine-jewelry/fine-ring"){
history.push('/shop/fine-jewelry' + history.location.search)
}else if(history.location.pathname === "/shop/fine-jewelry/bracelet"){
history.push('/shop/fine-jewelry' + history.location.search)
}else if(history.location.pathname === "/shop/fine-jewelry/watch"){
history.push('/shop/fine-jewelry' + history.location.search)
} else {
  history.push('/shop/fine-jewelry' + history.location.search)
}
  }
  var originalSearchArray = history.location.search.split('&?');
  originalSearchArray.forEach((searchString,index)=>{
    if(searchString.includes(key)){
      originalSearchArray.splice(index,1)
    }
  })

  originalSearchArray.forEach((search,i)=>{
    if(search.includes('?')){
      originalSearchArray[i] = search.split('?').join('')
    }
  })
  if(!returnString){
  history.push(history.location.pathname + '?' + originalSearchArray.join('&?'))
} else {
  if(justSearchPart){
    var smallReturnString = originalSearchArray.join('&?');
    if(smallReturnString.length > 0){
      return  '?' + smallReturnString
    } else {
      return ''
    }
  } else {

  var searchString = history.location.pathname + '?' + originalSearchArray.join('&?');
  if(searchString[searchString.length -1] === '?'){
    return searchString.substring(0, searchString.length-1)
  } else {
    return searchString
  }
}
}
};
