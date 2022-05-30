import React from 'react';
import Div from 'shared/Div';


// -----
const funcC0mp = (props) =>{

  return (
    <Div  color='black' fontWeight='bold' padding='0 5px'>
      {
        props.ItemStatus === "I" ?
          <Div>
            Tomorrow
          </Div>:
          <Div>
            5 weeks out.
          </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
