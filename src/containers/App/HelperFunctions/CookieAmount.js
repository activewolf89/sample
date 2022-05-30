import cookies from 'react-cookies'

export default function(){
  var cookieString = cookies.loadAll()['wishlistItems'];

  if(cookieString){
    var cookieArray = cookieString.split(',')
    if(cookieArray[0] === ''){
      return 0
    } else {
      return cookieArray.length
    }
  } else {
    return 0;
  }
};
