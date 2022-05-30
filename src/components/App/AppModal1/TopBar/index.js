import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import FontAwesome from 'react-fontawesome';
// -----
const TopBar = (props) =>{
  return (
    <Div
      padding='10px'
      display='flex' justifyContent='space-between' alignItems='center'
      themedAccent
      borderBottom='1px solid black'
    >
      <Div />
      <Title  capitalize>{props.choiceKey}</Title>
      <Div >
        <FontAwesome
          className='super-crazy-colors'
          name='window-close'
          size='2x'
          style={{ marginRight:'5px', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',cursor:'pointer' }}
          onClick={()=>{props.onToggleDetail('closeIt')}}
        />
      </Div>
    </Div>
  )
}
TopBar.propTypes = {
}
export default TopBar;
