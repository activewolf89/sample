import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import PhotoLinkGrid from 'shared/PhotoLinkGrid';
import {H3} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='10px 0' display='flex' flexDirection='column' alignItems='center' >
      <H3>
        <P textAlign='center'>
          Your shopping cart is empty.  Continue shopping
        </P>
      </H3>
      <Div maxWidth='996px'>

        <PhotoLinkGrid
          fromMyAccount
          history={props.history}
        />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
