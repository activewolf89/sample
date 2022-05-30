export default function(string){
var object = {
    140: '/engagement/shop/',
    115: '/wedding/shop',
    110: '/wedding/shop',
    190: '/diamond/shop'
  }
  if(object[string]){
    return object[string]
  } else {
    return '/'
  }
};
