import React from 'react';
import Div from 'shared/Div';
import Store from 'images/store.jpg';
import P from 'shared/P';
import Button from 'shared/Button';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div padding='5px 0' themed textAlign='center'>
        No Upcoming Events
      </Div>
      <img src={Store} alt="no upcoming events" style={{width:'100%',height:'300px'}} />
      <P textAlign='center' padding='5px'>
        We are not currently having any events, but stay tuned! Ask us via email if you are interested in what may be coming.
      </P>
      <Button lightThemed width='100%' onClick={()=>{props.onContactClick('email')}}>
        Check With Store
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
