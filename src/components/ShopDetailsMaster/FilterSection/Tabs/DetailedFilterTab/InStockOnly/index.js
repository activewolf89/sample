import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  cursor='pointer' onClick={()=>{AddOntoSearchSegment('ItemStatus','all',props.history)}}>
      Out-Of-Stock
      {
        props.history.location.search.includes('ItemStatus') &&
        <FontAwesome name="check" style={{color:'green'}} />
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
