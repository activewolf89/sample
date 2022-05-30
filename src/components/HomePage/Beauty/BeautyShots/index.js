import React from 'react';
import Div from 'shared/Div';
import StyledIframe from 'shared/StyledIframe';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' justifyContent='center' flexDirection='column' alignItems='center'>

      <StyledIframe lifestyleOption retrieveLifestyle lifestyle movieName={props.item} ItemKey = {props.item} />

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
