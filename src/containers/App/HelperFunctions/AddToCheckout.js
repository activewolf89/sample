import cookie from 'react-cookies'

export default function(checkOutItem,removeCookies){
  var cookieString = cookie.loadAll()['checkOutItem']
  if(removeCookies){
        cookie.remove('checkOutItem',{path:'/'});
        return
  } else {

  if(cookieString){

    var cookieArray = cookieString.split(',')

    var found = false;
    cookieArray.forEach((string,index)=>{
      if(string === checkOutItem){
        //remove from the string
          found = true;
        cookieArray.splice(index,1)
      }
    })
    if(!found){
      cookieArray.push(checkOutItem)
    }

    cookieString = cookieArray.join(',')
    var TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));

    cookie.save('checkOutItem', cookieString, {path: '/',expires:TenYears});
    return cookieString

  } else {
    TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));
    cookie.save('checkOutItem', checkOutItem, {path: '/',expires:TenYears});
    return checkOutItem
  }

}



};
