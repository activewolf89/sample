import React from 'react';
import Span from 'shared/Span';
import FontAwesome from 'react-fontawesome';

// -----
const funcC0mp = (props) =>{
  return (
      <Span cursor='pointer' color='black'  onClick={()=>{props.handleContactClick('drop a hint')}}>
        <small>
          <FontAwesome name='envelope' style={{padding:'0 3px'}} />
          Email List
        </small>
      </Span>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
