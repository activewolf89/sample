import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='10px 0'>
      <H2 >
        No items have been added to your wishlist so far.
      </H2>
      <Div fontStyle='italic'>
        Click on any link below to start shopping.
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
