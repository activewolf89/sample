import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H'
import P from 'shared/P';
import Button from 'shared/Button';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <H3 textAlign='center'>
        The Item you were looking for was not found, please refine search.
      </H3>
      <P textAlign='center'>
        You have been redirected to the last page you were on.
      </P>
      <Button active width='100%' onClick={()=>{props.onToggleDetail('close')}}>
        Got It
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
