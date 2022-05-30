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
      <Li>
        <Div  whiteSpace='nowrap' width='120px'>
          Address1
        </Div>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.shippingObject.address1.triggered}>
          <Input  width='100%' type='text' value={props.shippingObject.address1.value} onChange={(e)=>{props.onInputChange(props.choiceKey,'address1',e.target.value,"text")}}/>
        </Div>
        {
          props.shippingObject.address1.triggered &&
          <Error>
            {props.shippingObject.address1.error}
          </Error>
        }
      </Li>
      <Li>
        <Div  whiteSpace='nowrap' width='120px'>
          Address2
        </Div>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.shippingObject.address2.triggered}>
          <Input  width='100%' type='text' value={props.shippingObject.address2.value} onChange={(e)=>{props.onInputChange(props.choiceKey,'address2',e.target.value,"text")}}/>
        </Div>
        {
          props.shippingObject.address2.triggered &&
          <Error>
            {props.shippingObject.address2.error}
          </Error>
        }
      </Li>
      <Li>
        <Div  whiteSpace='nowrap' width='120px'>
          Zip Code
        </Div>
        <Div display='flex' flexWrap='nowrap' alignItems='center'  error={props.shippingObject.zipCode.triggered}>
          <Input   width='100%' type='text' value={props.shippingObject.zipCode.value} onChange={(e)=>{
            var reg = new RegExp('^[0-9]+$');
            if(reg.test(e.target.value) && e.target.value.length <=5){
              props.onInputChange(props.choiceKey,'zipCode',e.target.value,"text")}
          }}/>
        </Div>
        {
          props.shippingObject.zipCode.triggered &&
          <Error>
            {props.shippingObject.zipCode.error}
          </Error>
        }
      </Li>
      <Li>
        <Div   whiteSpace='nowrap' >
          City/State
        </Div>
        <Div display='flex' flexWrap='nowrap'>

          <Div width='80%' display='flex' flexWrap='nowrap' alignItems='center'  error={props.shippingObject.city.triggered}>
            <Input disabled width='100%' type='text' value={props.isPullCityState ? 'loading...':props.shippingObject.city.value} onChange={(e)=>{props.onInputChange(props.choiceKey,'city',e.target.value,"text")}}/>
          </Div>
          <Div width='20%' display='flex' flexWrap='nowrap' alignItems='center'  error={props.shippingObject.state.triggered}>
            <Input disabled  width='100%' type='text' value={props.isPullCityState ? 'loading...':props.shippingObject.state.value} onChange={(e)=>{props.onInputChange(props.choiceKey,'state',e.target.value,"text")}}/>
          </Div>
        </Div>
      </Li>
      <Li>
      </Li>

    </NoMPUl>
  )
}
ShippingInformation.propTypes = {

}
export default ShippingInformation;
