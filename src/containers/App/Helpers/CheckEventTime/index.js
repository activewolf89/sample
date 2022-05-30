
export default function(obj){
  var count = 0;
  obj.events.forEach((event)=>{
    if(event.upcoming){
      count++;
    }
  })

  return count
}
