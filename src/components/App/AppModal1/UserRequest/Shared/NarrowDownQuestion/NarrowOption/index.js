import React from 'react';
import Div from 'shared/Div';
import Select from 'shared/Select';
import Option from 'shared/Option';
import Input from 'shared/Input';

// -----
const funcC0mp = (props) =>{
  const smallTitle = props.title.toLowerCase()
  return (
      <Div  display='flex' flexDirection='column' alignItems='center' width='100%' >
        {props.title}
        <Select width='100%' value={props.preferredContact[smallTitle].value} onChange={(e)=>{props.onInputChange('preferredContact',smallTitle,e.target.value)}} >
          <Option>
            -
          </Option>
          {
            props.options.map((opt,idx)=>{
              return (
                <Option key={opt}>
                  {opt}
                </Option>
              )
            })
          }

          <Option>
            Other
          </Option>
        </Select>
        {
          props.preferredContact[smallTitle].value === 'Other' &&
          <Input width='100%' value={props.preferredContact[smallTitle].detailedValue} onChange={(e)=>{props.onInputChange('preferredContact',smallTitle,e.target.value,'detailedValue')}} placeholder='please specify' type='text' />
        }
      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
