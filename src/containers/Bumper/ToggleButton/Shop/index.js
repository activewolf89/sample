import React from 'react';
import Div from 'shared/Div';
import Floaters from '../Shared/Floaters';
import Highlight from '../Shared/Highlight';
// -----
const ToggleShop = (props) =>{
  return (
    <Div >
      {
        props.isSpecific ?
          <Floaters position='mid' toggle = {props.toggle}  onToggle= {props.onToggle}>
            <Highlight
              toggle = {props.toggle}
              name="Filters"
            />
          </Floaters>:
          <Floaters position='mid' toggle = {props.toggle}  onToggle= {props.onToggle}>
            <Highlight
              toggle = {props.toggle}
              name="Promises"
            />

          </Floaters>
      }
    </Div>
  )
}
ToggleShop.propTypes = {
}
export default ToggleShop;
