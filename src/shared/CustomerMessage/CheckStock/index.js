import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='inline-block'>
      {
        props.isPending ?
          <Span>
            <Span color='orange' fontStyle='italic' fontWeight='bold'>
              Pending Sale
            </Span>
          </Span>:
          <Span  >


            {
              props.ItemStatus  === "I" ?
                <Span color='green' fontStyle='italic' fontWeight='bold'>
                  In Stock
                </Span>
            :
            props.ItemType === "diamond" ?
              <Span color='maroon' fontWeight='bold'>
                Sold
              </Span>
            :
            <Span color='maroon' fontWeight='bold'>
              Out of Stock
            </Span>
          }
        </Span>
      }
  </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
