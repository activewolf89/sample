import React from 'react';
import Div from 'shared/Div';
import Description from './Description';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div >
        <Description
          metalObjects = {props.dailys.metalObjects}

        />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
