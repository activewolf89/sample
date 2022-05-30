import cookies from 'react-cookies'


export default function(){
  var cookieString = cookies.loadAll()['checkOutItem'];
  return cookieString
}
