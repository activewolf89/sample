import React from 'react';
import Div from 'shared/Div';
import Input from 'shared/Input';
import Span from 'shared/Span';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding={!props.error ? '0 0 35px 0':'0px'}>
      <label>{props.label}</label>
      <Input
        readOnly ={props.readOnly}
        width='100%'
        type={props.type}
        error={props.error}
        name={props.name}
        value={props.value}
        onChange={(e)=>{props.onStringInputChange(e.target.name,e.target.value,props.fromPassword ? true:false)}}
      />
      <Span fontStyle="italic" color='red'>{props.error}</Span>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
