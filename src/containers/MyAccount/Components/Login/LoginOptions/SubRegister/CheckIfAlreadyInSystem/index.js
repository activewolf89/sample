import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';
import Input from 'shared/Input';
import Label from 'shared/Label';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import A from 'shared/A'
import Button from 'shared/Button';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexDirection='column'  alignItems='center'>
      <Div
        width='100%'
        height='100%'
        themed
        position='absolute'
        zIndex='1'
        top='0'
        opacity='.8'
      />
      <Div  top = '0' zIndex='1' opacity='.9' width='100%' color='white' height='100%' padding='10px' >

        <Div padding='10px 0'>

          <H2 textAlign='center'>
            Have you been to our store before?
          </H2>
        </Div>
        <Div width='100%'>
          <NoMPUl display='flex' justifyContent='space-around'  >
            <Li>
              <Div display='flex' alignItems='center' cursor='pointer' onClick={props.onHasBeenIn}>
                <Input type='checkbox' style={{width:'25px',height:'25px'}} />
                <Label>Yes</Label>
              </Div>
            </Li>
            <Li>

              <Div display='flex' alignItems='center' cursor='pointer' onClick={props.onResponse}>
                <Input type='checkbox' style={{cursor:'pointer',width:'25px',height:'25px'}} />
                <Label>No</Label>
              </Div>
            </Li>
          </NoMPUl>
        </Div>
        {
          props.hasBeenIn &&
          <Div textAlign='center' maxWidth='500px'>
            Your email connecting your customer record is already registered with a password randomly generated.  Click <A active onClick={props.onForgetPassword}>Reset Password </A> to create your password.
            <Button themed active width='100%' onClick={props.onResponse}>Got It</Button>
          </Div>
        }
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
