import React from 'react';
import Div from 'shared/Div';

// -----
const funcC0mp = (props) =>{
  console.log(props)
  return (
  <Div position='relative' style={{font:'16px'}} cursor='pointer' whiteSpace='nowrap'  borderTop='1px solid gray' borderLeft='1px solid gray' borderRight='1px solid gray' borderBottom={props.active ? "6px solid maroon":'1px solid gray'}  borderRadius='5px'  >
    <Div opacity={props.active ? "1":'.4'} backgroundImg={props.backgroundImg} backgroundPosition='center' width='100%' maxWidth={"50%"} height='200px' backgroundPosition='center'>
    </Div>
    <Div opacity={props.active ? "1":'.6'} position='absolute' top='70%' width='100%' backgroundColor='white'>
      {props.name.toUpperCase()}
    </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
