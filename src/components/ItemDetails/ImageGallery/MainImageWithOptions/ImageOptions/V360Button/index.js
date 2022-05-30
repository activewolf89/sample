import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';


// -----
const funcC0mp = (props) =>{
  return (
    <Div  backgroundImg={props.stillShot} backgroundSize='100%' position='relative' color='green'  width='100px' height='100px' display='flex' justifyContent='center' alignItems='center'>
      <Div opacity='.7' zIndex='1' backgroundColor='gray' width='100%' height='100%'>
        <Div  width='100%' textAlign='center'>
          <FontAwesome name='recycle' size='lg' style={{color:'green'}} />
        </Div>
        <Div fontWeight='bold'  textAlign='center'>
          360
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
