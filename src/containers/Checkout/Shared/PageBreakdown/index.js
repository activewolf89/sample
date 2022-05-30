import React from 'react';
import Div from 'shared/Div';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' width='100%' flexWrap='nowrap'>
      <Div themed = {props.one.lit} height='33vh' textAlign='center' borderBottom='2px solid gray'>
        {props.one.name}
      </Div>
      <Div height='33vh' themed = {props.two.lit} textAlign='center' borderBottom='2px solid gray'>
        {props.two.name}
      </Div>
      <Div height='33vh' themed = {props.three.lit} textAlign='center'>
        {props.three.name}
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
