import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Button width='100%' height='50px'>
        <Div display='flex' justifyContent='space-around'>
          <FontAwesome name="angle-double-up" />
          <FontAwesome name="angle-double-up" />
          <FontAwesome name="angle-double-up" />
        </Div>
        </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
