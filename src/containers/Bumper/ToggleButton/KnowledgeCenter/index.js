import React from 'react';
import Div from 'shared/Div';
import Floaters from '../Shared/Floaters';
import Highlight from '../Shared/Highlight'
// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      <Floaters position='bottom' toggle = {props.toggle}  onToggle= {props.onToggle} >
        <Highlight
          toggle = {props.toggle}
          name="Knowledge Center"
        />
      </Floaters>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
