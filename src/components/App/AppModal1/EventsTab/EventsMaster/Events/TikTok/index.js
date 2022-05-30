import React from 'react';
import Div from 'shared/Div';
import Countdown from 'shared/Countdown';
import {H4} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  var later;
  var today = new Date().setHours(0,0,0,0);
  var d1 = new Date(props.start)
  if(d1 < today){
    //happening now
    later = false
  } else {
    later = true
    //happening later
  }
  return (
    <Div>
      {
        later ?

          <H4>
            <Div  display='flex' flexWrap='nowrap'  backgroundColor='maroon' alignItems='center'>
              <Div padding='0 5px'>


                {" Starts in  "}

              </Div>
              <Countdown showText date={props.start}/>
            </Div>
          </H4>
        :
        <H4>
          <Div  display='flex' flexWrap='nowrap'  backgroundColor='green' alignItems='center'>
            <Div padding='0 5px'>


              {" Happening now  "}

            </Div>
            <Countdown showText date={props.end}/>
          </Div>
        </H4>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
