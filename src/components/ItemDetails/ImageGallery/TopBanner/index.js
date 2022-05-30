import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import A3 from 'shared/A3';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const funcC0mp = (props) =>{
  return (
    <Div width='100%'  textDecoration='underline' backgroundColor='lightGray' border='1px solid white;'  padding='10px 0'>
      <NoMPUl display='flex'>
        <Li>
          <A3  color='white' onClick={()=>{props.history.push('/')}}>
            Home
          </A3>
          <FontAwesome name='long-arrow-right' style={{color:'white',padding:'0 3px'}} />
        </Li>
        <Li>
          <A3 color='white' onClick={()=>{props.history.push('/shop')}}>
            Shop
          </A3>
          <FontAwesome name='long-arrow-right' style={{color:'white',padding:'0 3px'}} />
        </Li>
        <Li>
          <A3 color='white'>
            {props.ItemKey}
          </A3>
        </Li>
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
