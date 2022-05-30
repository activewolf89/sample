import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H'
import A from 'shared/A';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexDirection='column' alignItems='center' justifyContent='center' width='100%' padding='10px 0'>
      <H3 textAlign='center'>Hi {props.userProfile._Customer.CustomerFirstName}, welcome to your account!</H3>
      <A color='black' active textAlign='center'>{props.loggedEmail}</A>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
