import React from 'react';
import Div from 'shared/Div';
import Body from './Body';
import ButtonsToChoose from './ButtonsToChoose'
import OptionsInArray from './OptionsInArray'
import Message from './Message';
import Header from './Header'

// -----
const EntireBody = (props) =>{


  return (
    <Div >
      <Header
        onClose={props.onClose}
        selectedEdit = {props.selectedEdit}
      />
      {
        Array.isArray(props.objToEdit.new) &&
        <OptionsInArray
          onChangeFocus = {props.onChangeFocus}
          objToEdit = {props.objToEdit}
          selectedEdit = {props.selectedEdit}
          onAddTemplate = {props.onAddTemplate}

        />
      }
      <Body
        onUpdateUserProfile = {props.onUpdateUserProfile}
        onRemove = {props.onRemove}
        currentIndex = {props.objToEdit.indexSelected}
        onObjectChange = {props.onObjectChange}
        loginEmail = {props.loginEmail}
        objToEdit = {props.objToEdit}
        selectedEdit = {props.selectedEdit}
        onStringInputChange = {props.onStringInputChange}
        serverErrorObject = {props.serverErrorObject}
        onCheckIfEmailExists = {props.onCheckIfEmailExists}
      />
      <Message
        messageString = {props.messageString}
      />
      <ButtonsToChoose
        onClose={props.onClose}
        onClearInputs = {props.onClearInputs}
        onAddTemplate = {props.onAddTemplate}
        onUpdateUserProfile = {props.onUpdateUserProfile}
        selectedEdit = {props.selectedEdit}
      />

    </Div>
  )
}
EntireBody.propTypes = {
}
export default EntireBody;
