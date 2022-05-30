import React from 'react';
import Div from 'shared/Div';
import Option from 'shared/Option';
import FontAwesome from 'react-fontawesome';
import Select from 'shared/Select';
// -----
const funcC0mp = (props) =>{
  console.log(props)
  return (
      <Select display='flex' flexDirection='column' value={props.isOpen} width='100%' onChange={(e)=>{props.onTheChange(e.target.value,props.options); props.history.push(props.ConnectValueWithLink(e.target.value,props.options,props.history.location.search))}}>
        {props.options.map((choice,idx)=>{
          return (
            <Option key={idx} >
              {choice.name}
            </Option>
          )
        })}

      </Select>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
