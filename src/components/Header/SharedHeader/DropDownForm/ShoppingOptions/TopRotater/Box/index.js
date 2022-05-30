import React from 'react';
import Div from 'shared/Div';


// -----
const funcC0mp = (props) =>{
  return (


    <Div padding={props.active ? "5px":"0px"}  className={props.active ? "element":''} display='flex' alignItems='center'  >
      <Div padding="0 5px" >
        <img src={props.jewelPic} style={{width:'30px',height:'30px'}} alt="jewel" />
      </Div>
      {props.name}
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
