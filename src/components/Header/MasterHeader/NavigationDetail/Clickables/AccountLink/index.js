import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import FloatFont from 'shared/FloatFont';
import SideNumber from 'shared/SideNumber'
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexDirection='column' color='white' position='relative'>
      {
        props.userProfile.fName ?
          <Div display='flex' flexDirection='column' onClick={props.onLogOut}>
            <FontAwesome name="user" size='lg' style={{color:'white' ,padding:'0 2px'}} />
            <SideNumber
              number = {'Logoff'}
            />
          </Div>:
          <Div display='flex' flexDirection='column' onClick={()=>{props.onContactClick('login')}} >
            <FontAwesome name="user" size='lg' style={{color:'white' ,padding:'0 2px'}} />
            <SideNumber
              number = {'Login'}
            />
          </Div>
      }
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
