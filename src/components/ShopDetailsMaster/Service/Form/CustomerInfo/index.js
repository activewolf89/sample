import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import Title from 'shared/Title'
import Input from 'shared/Input'
import PhoneInput from "react-phone-input-2";

// -----
const CustomerInfo = (props) =>{
  return (
    <Div>

      <Div margin="10px 0">
        <Title underline>Contact Info</Title>
      </Div>
      <NoMPUl display="flex" flexWrap="wrap" justifyContent="center" childrenPadding="0 5px">
        <Li key="name">
          <Title>Full Name</Title>
          <Input x-autocompletetype="name" error={props.contactValidators.name} name="name" value={props.name} onChange={(e)=>{props.onStringChange(e.target.name,e.target.value)}} type="text" />
          <Title fontStyle="italic" fontSize="14px">{props.contactValidators.name}</Title>
        </Li>
      </NoMPUl>
      <NoMPUl display="flex" flexWrap="wrap" justifyContent="center" childrenPadding="0 5px">

        <Li  key="phone" >
          <Title>Phone</Title>
          <Div error={props.contactValidators.phone}>
            <PhoneInput
              name="phone"
              onChange={props.onPhoneChange}
            />
          </Div>
          <Title fontStyle="italic" fontSize="14px">{props.contactValidators.phone}</Title>

        </Li>
        <Li  key="email">
          <Title>Email</Title>
          <Input x-autocompletetype="email" error={props.contactValidators.email} name="email" value={props.email} onChange={(e)=>{props.onStringChange(e.target.name,e.target.value)}} type="email" />
          <Title fontStyle="italic" fontSize="14px">{props.contactValidators.email}</Title>

        </Li>
  </NoMPUl>
</Div>
  )
}
CustomerInfo.propTypes = {
  contactValidators: PropTypes.object.isRequired,
  onStringChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onPhoneChange: PropTypes.func.isRequired
}
export default CustomerInfo;
