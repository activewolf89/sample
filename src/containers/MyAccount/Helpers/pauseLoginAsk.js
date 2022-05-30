import cookies from 'react-cookies'
var OneHour = new Date(Date.now() + (30 * 60 * 1000));

export default function(){
  cookies.save('pauseRequest', true, {path: '/',expires:OneHour});


}
