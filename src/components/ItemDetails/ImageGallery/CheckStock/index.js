import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import {H4} from 'shared/H';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  >


      {
        props.ItemStatus  === "I" ?
          <Div >
            <small>
              <Span color='green' fontStyle='italic' fontWeight='bold'>
                (In Stock)
              </Span>
            </small>
          </Div>:
        props.ItemType === "diamond" ?
          <Div >
            <small>
              <Span color='maroon' fontWeight='bold'>
                (Sold)
              </Span>
            </small>
          </Div>:
          <Div >
            <small>
              <Span color='maroon' fontWeight='bold'>
                (Special Order)
              </Span>
            </small>
          </Div>
      }
          </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
