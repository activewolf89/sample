import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Input from 'shared/Input';
import Error from 'shared/Error';
// -----
const ShippingInformation = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='10px'>
      <Li>
        <Div  whiteSpace='nowrap' width='120px'>
          First Name
        </Div>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.shippingObject.firstName.triggered}>
          <Input  width='100%' type='text' value={props.shippingObject.firstName.value} onChange={(e)=>{props.onInputChange(props.choiceKey,'firstName',e.target.value,"text")}}/>
        </Div>
        {
          props.shippingObject.firstName.triggered &&
          <Error>
            {props.shippingObject.firstName.error}
          </Error>
        }
      </Li>
      <Li>
        <Div  whiteSpace='nowrap' width='120px'>
          Last Name
        </Div>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.shippingObject.lastName.triggered}>
          <Input  width='100%' type='text' value={props.shippingObject.lastName.value} onChange={(e)=>{props.onInputChange(props.choiceKey,'lastName',e.target.value,"text")}}/>
        </Div>
        {
          props.shippingObject.lastName.triggered &&
          <Error>
            {props.shippingObject.lastName.error}
          </Error>
        }
      </Li>
    </NoMPUl>
  )
}
ShippingInformation.propTypes = {

}
export default ShippingInformation;
