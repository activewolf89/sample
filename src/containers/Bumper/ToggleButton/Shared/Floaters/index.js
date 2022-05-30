import React from 'react';
import Div from 'shared/Div';

// -----
const Banner = (props) =>{
  return (
    <Div
      borderRadius="0 10px 10px 0"
      themed
      zIndex='11'
      cursor='pointer'
      style={{writingMode:'vertical-rl',textOrientation:'mixed'}}
      position='absolute'
      left='100%'
      display='flex'
      opacity='.9'
      alignItems="center"
      justifyContent='center'
      margin='80px 0 0 0'
      onClick = {props.onToggle}
    >
      {props.children}
    </Div>
  )
}
Banner.propTypes = {
}
export default Banner;
