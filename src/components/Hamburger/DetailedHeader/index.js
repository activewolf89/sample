import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import {H5} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div onClick={()=>{props.onDetailClick(false)}} fontWeight='bold' borderBottom='2px solid black' display='flex' justifyContent='space-between' padding='10px' alignItems='center' cursor='pointer'>
      <FontAwesome name='caret-left' />
      <H5 bold>
        {props.isDetailHamburgerOpen ? props.isDetailHamburgerOpen.split('_').join(' ').toUpperCase():"LOADING..."}
      </H5>
      <Div />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
