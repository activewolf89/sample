import cookie from 'react-cookies'

export default function(history,selection,promoObj){
  var TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));
  var pathname = history.location.pathname;
  var selected = '';
  if(pathname === '/' && !promoObj.active){
    selected = 'Show All';
  } else if(pathname.toLowerCase() === '/shop'){
    selected = 'Show All'
  }
  else if(pathname.includes('fine-jewelry')){
    //fine jewelry
    if(pathname.includes('pendant')){
      selected = 'necklaces'
    } else if(pathname.includes('necklace')){
      selected = 'necklaces'
    } else if(pathname.includes('bracelet')){
      selected = 'bracelets'
    } else if(pathname.includes('watch')){
      selected = 'watches'
    } else if(pathname.includes('fine-ring')){
      selected = 'fine-rings'
    } else if(pathname.includes('other')){
      selected = 'others'
    } else if(pathname.includes('earring')){
      selected = 'earrings'
    } else {
      selected = 'fine-jewelry'
    }
  }
  else if(pathname.includes('wedding-bands')){
    selected = 'wedding-bands'
  }
    //wedd bands
    else if(pathname.includes('mens-band')){
      selected = 'mens-bands'
    }
    else if(pathname.includes('ladies-band')){
      selected = 'ladies-bands'
    }
 else if(pathname.includes('diamonds')){
    selected = 'diamonds'
  } else if(pathname.includes('engagement-rings')){
    selected = 'engagement-rings'
  } else {
    if(promoObj.active && promoObj.match){
      selected = promoObj.match
    } else {
      selected = 'Show All'
    }
  }

  cookie.save('browse', selected, {path: '/',expires:TenYears});
  return selected;




};
// 'fine-jewelry',
// 'wedding-bands',
// 'engagement-rings',
// 'diamonds',
// 'ladies-bands',
// 'mens-bands',
// 'necklaces',
// 'earrings',
// 'bracelets',
// 'watches',
// 'fine-rings',
// 'other',
