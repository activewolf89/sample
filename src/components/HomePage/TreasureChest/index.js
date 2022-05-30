import React from 'react';
import Div from 'shared/Div';
import TreasureChest from 'images/2020Christmas/treasurechest2.jpg';
import StyledLink from 'shared/StyledLink';
import Countdown from 'shared/Countdown';
import {H4} from 'shared/H';
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
    <StyledLink to='/shop?ItemSignage=treasure-chest'>
      <Div backgroundColor='black' display='flex' flexDirection='column' alignItems='center'>
        <img src={TreasureChest} style={{maxWidth:'600px', width:'100vw', height:'100%'}} alt="treasure chest" />
        <Div backgroundColor='darkGray' color='white' width='100%'>

          <H4 textAlign ='center'>
            New Inventory Will Reset in
            <Countdown date=  {findTreasureEvent(props.eventsChecklist.events).end}/>
          </H4>
        </Div>
      </Div>
    </StyledLink>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;


//----
