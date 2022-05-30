import React from 'react';
import Div from 'shared/Div';
import ClickableBoolean from './ClickableBoolean'
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';

const funcC0mp = (props) =>{
  return (
    <Div display='flex' justifyContent='center'>
      <Div
        onClick={()=>{
          if(props.history.location.search.includes('?ItemStatus=I')){
            AddOntoSearchSegment('ItemStatus','',props.history)
          } else {
            AddOntoSearchSegment('ItemStatus','All',props.history)
          }

        }}

      >
        <ClickableBoolean
          toggle={props.history.location.search.includes('ItemStatus=All') ? false:true}
        />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
