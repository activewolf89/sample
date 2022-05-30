export default function(pathname){
  if(pathname.includes('shop')){
    return 'Shop'
  } else if(pathname.includes('knowledge-center')){
    return 'Knowledge-Center'
  } else {
    return 'Home'
  }
}
