import React from 'react';
import Div from 'shared/Div';
import Store from 'images/store.jpg';
import Title from 'shared/Title';
import Button from 'shared/Button';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div padding='5px 0' >
        <Title bold >
          No Upcoming Events
        </Title>
      </Div>
      <img src={Store} alt="no upcoming events" style={{width:'100%',height:'300px'}} />
      <Button themed width='100%'>
        Check With Store
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
