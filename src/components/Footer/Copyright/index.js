import React from 'react';
import Div from 'shared/Div';
//shared
import FontAwesome from 'react-fontawesome';
// -----
const Copyright = (props) =>{

  return (
    <Div display="flex" alignItems='center' justifyContent="center"  color="lightGray" flexWrap='nowrap' margin='0 0 40px 0'>
      <small>
        <FontAwesome name="copyright"/> {new Date().getFullYear()} L T DENNY JEWELERS. ALL RIGHTS RESERVED.
      </small>
      </Div>
  )
}

export default Copyright;
