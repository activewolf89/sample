import React from 'react';
import Div from 'shared/Div';
import A from 'shared/A'
import {H3} from 'shared/H'

// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' justifyContent='center' >
      <A underline color='maroon' onClick={props.onLogOut}>
        <H3>
          [Log Out]
        </H3>
      </A>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
