import React from 'react';
import Div from 'shared/Div';
import StringInputs from '../Inputs/StringInputs'
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li'
// -----
const Passwords = (props) =>{
  return (
    <Div >
      <form>
        <NoMPUl>

          <Li>
            <StringInputs
              error ={props.error === false ? false:props.error[0].password ? props.error[0].password:false }
              label={"Password"}
              type='password'
              name={props.name}
              value={props.objToEdit.new}
              onStringInputChange = {props.onStringInputChange}
            />
          </Li>
          <Li>
            <StringInputs
              error ={props.error === false ? false:props.error[0].confirmPassword ? props.error[0].confirmPassword:false }
              fromPassword
              label={"Confirm Password"}
              type='password'
              name={props.name}
              value={props.objToEdit.confirmNew}
              onStringInputChange = {props.onStringInputChange}
            />
          </Li>
        </NoMPUl>
      </form>

    </Div>
  )
}
Passwords.propTypes = {
}
export default Passwords;
