import React from 'react';
import Div from 'shared/Div';
import {H4,H2} from 'shared/H';

// -----
const MainTitle = (props) =>{
  return (
    <Div display='flex' alignItems='center' flexDirection='column' >
      <H2>
        MY ACCOUNT
      </H2>
      <H4>
        Log in for your account info
      </H4>
    </Div>
  )
}
MainTitle.propTypes = {
}
export default MainTitle;
