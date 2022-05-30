import {Map} from 'immutable';
import cookie from 'react-cookies'

export default function(wishlistObject,wishlistItem){

  var cookieString = cookie.loadAll()['wishlistItems']
  if(cookieString){
    var cookieArray = cookieString.split(',')

    var found = false;
    cookieArray.forEach((string,index)=>{
      if(string === wishlistItem){
        //remove from the string
          found = true;
        cookieArray.splice(index,1)
      }
    })
    if(!found){
      cookieArray.push(wishlistItem)
    }

    cookieString = cookieArray.join(',')
    var TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));

    cookie.save('wishlistItems', cookieString, {path: '/',expires:TenYears});
    return Map(wishlistObject)

  } else {
    TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));

    cookie.save('wishlistItems', wishlistItem, {path: '/',expires:TenYears});
    return Map(wishlistObject)
  }




};
