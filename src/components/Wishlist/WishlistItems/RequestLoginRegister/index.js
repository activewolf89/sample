import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import A from 'shared/A';
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex'  flexDirection='column'  alignItems='center'  top = '0' zIndex='10' opacity='.9' width='100%' themed height='100%' padding='10px' >
      <Div maxWidth='500px'>
        <Div padding='10px 0'>
          <H2 textAlign='center'>
            Login/Register to synchronize your wishlist to your account.
          </H2>
        </Div>
        <Div width='100%'>
          <NoMPUl display='flex' childrenPadding='5px' justifyContent='space-around'  >
            <Li>
              <Div display='flex' alignItems='center' cursor='pointer' onClick={props.onHasBeenIn}>
                <StyledLink to='/my-account'>
                  <A active>Go To Account Page</A>
                </StyledLink>
              </Div>
            </Li>

          </NoMPUl>
        </Div>
        {
          props.hasBeenIn &&
          <Div textAlign='center'>
            Your email connecting your customer record is already registered with a password randomly generated.  Click <A onClick={props.onForgetPassword} active>Reset Password </A> to create your password.
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
