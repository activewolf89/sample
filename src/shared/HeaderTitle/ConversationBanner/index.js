import React from 'react';
import Div from 'shared/Div';
import {H4} from 'shared/H';
import Countdown from 'shared/Countdown';
// -----
var findTreasureEvent = function(events){
  var obj = ''
  events.forEach((e)=>{
    if(e.name.includes("Treasure")){
      obj = e
    }
  })
  return obj;
}
const funcC0mp = (props) =>{
  return (
    <Div  color='gray'>
      <H4 textAlign='center' >
        New Inventory Will Reset in
        <Countdown date=  {findTreasureEvent(props.events).end}/>
      </H4>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
