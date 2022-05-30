import React from 'react';
import Div from 'shared/Div';
import Input from 'shared/Input';
import P from 'shared/P';
// -----
const MasterInput = (props) =>{

  return (
    <Div >
      <label>{props.label}</label>
      {
        props.type === 'email' ?
          <Div>
            <Input
              readOnly
              onBlur = { ()=>{props.onCheckIfEmailExists && props.onCheckIfEmailExists(props.valueObject.value)}}
              width='100%'
              onMouseOver={(e)=>{e.target.readOnly=false}}
              readOnlyColor={props.readOnly}
              error={(props.serverErrorObjectValue && props.serverErrorObjectValue) || props.valueObject.error || (props.onCheckIfEmailExists && props.registerExistingEmailError)}
              name={props.name}
              value={props.valueObject.value}
              onChange={(e)=>{props.onInputChange(props.objName,e.target.name,e.target.value)}}
              type={props.type} />
            <P  fontStyle="italic" color='red'>{props.valueObject.error || (props.onCheckIfEmailExists && props.registerExistingEmailError)}</P>
            {
              props.serverErrorObjectValue &&
              <P  fontStyle="italic" color='red'>{props.serverErrorObjectValue}</P>
            }
          </Div>:
        props.type === 'password' ?
          <Div>
            <Input
              width='100%'
              onMouseOver={(e)=>{e.target.readOnly=false}}
              readOnly={props.readOnly}
              type={props.type}
              value={props.valueObject.value}
              onChange={(e)=>{props.onInputChange(props.objName,e.target.name,e.target.value)}}
              error={props.valueObject.error}
              name={props.name} />
            <P fontStyle="italic" color='red'>{props.valueObject.error}</P>


          </Div>:
        props.type === 'text' ?
          <Div>
            <Input
              width='100%'
              type={props.type}
              error={props.valueObject.error}
              name={props.name}
              value={props.valueObject.value}
              onChange={(e)=>{props.onInputChange(props.objName,e.target.name,e.target.value)}}
            />
            <P fontStyle="italic" color='red'>{props.valueObject.error}</P>

          </Div>:""
        }
      </Div>
      )
}
MasterInput.propTypes = {
}
export default MasterInput;
