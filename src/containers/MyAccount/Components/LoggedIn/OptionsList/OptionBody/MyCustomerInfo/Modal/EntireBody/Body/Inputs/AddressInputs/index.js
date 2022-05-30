import React from 'react';
import Div from 'shared/Div';
import Input from 'shared/Input';
import Span from 'shared/Span';

// -----
const AddressInputs = (props) =>{
  return (
    <Div padding={!props.error ? '0 0 35px 0':'0px'} display='flex' flexDirection='column'>
      <label>{props.name} </label>
      <Input error={props.error} type={props.type}  onChange={(e)=>{props.onObjectChange(props.link,e.target.value)}} name={props.name} value={props.value} />
      <Span color='red'>{props.error}</Span>
    </Div>
  )
}
AddressInputs.propTypes = {
}
export default AddressInputs;
