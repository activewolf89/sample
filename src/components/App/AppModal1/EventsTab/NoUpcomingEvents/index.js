import React from 'react';
import Div from 'shared/Div';
import Store from 'images/TKimages/jpg/fine-rings.jpg';
import P from 'shared/P';
import Button from 'shared/Button';
import {H3} from 'shared/H';

// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexDirection='column' alignItems='center' >
      <Div padding='5px 0' themed textAlign='center'>
        <H3>
          No Upcoming Events
        </H3>
      </Div>
      <img src={Store} alt="no upcoming events" style={{width:'200px',height:'200px'}} />
      <P textAlign='center' padding='5px'>
        We are not currently having any active events, but stay tuned! Ask us via email if you are interested in what may be coming.
      </P>
      <Button  width='100%' onClick={()=>{props.onContactClick('email')}}>
        Check With Store
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
