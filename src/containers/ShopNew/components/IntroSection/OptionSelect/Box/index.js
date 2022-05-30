import React from 'react';
import Div from 'shared/Div';

// -----
const funcC0mp = (props) =>{
  return (
  <Div className={props.active ? "element":"element1"} width='150px' position='relative' style={{font:'16px'}} cursor='pointer' whiteSpace='nowrap'  borderTop='1px solid gray' borderLeft='1px solid gray' borderRight='1px solid gray' padding='5px' borderRadius='5px'  >
    <Div display='flex' flexDirection='column' alignItems='center' opacity={props.active ? "1":'.4'} color={props.active ? "black":'white'}>
      <img src={props.backgroundImg} alt="jewelry" style={{width:'30px',height:'30px'}} />
      {props.name.toUpperCase()}
    </Div>

  </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
