import React from 'react';
import Div from 'shared/Div';
import Input from 'shared/Input';
import Span from 'shared/Span';

// -----
const funcC0mp = (props) =>{
  return (
    <Div padding={!props.error ? '0 0 35px 0':'0px'} display='flex' flexDirection='column'>
      <label>{props.name} </label>
      <Input
        onBlur={()=>{props.onCheckIfEmailExists(props.value)}}
        error={props.error}
        width='100%'
        readOnly={props.readOnly}
        type={props.name ==='Email' ?'email':'text'}
        name={props.name}
        onChange={(e)=>{props.onStringInputChange(e.target.name,e.target.value,props.fromPassword ? true:false)}}
        value={props.value}
      />
      {
        props.serverErrorObject &&
        <Span color='red'>{props.serverErrorObject.registerExistingEmail}</Span>
      }
      <Span color='red'>{props.error}</Span>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
