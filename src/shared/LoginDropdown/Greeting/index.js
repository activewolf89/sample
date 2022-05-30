import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
require('./numberWithItem.css')
// -----
const funcC0mp = (props) =>{
  return (
    <Div  height='100%'  cursor='pointer' display='flex' flexWrap='nowrap' alignItems='center' position='relative' onClick={()=>{props.email ? props.onToggle():props.onContactClick("login")}}>
      <Div>
        <Div position='absolute' left='100%'>

          <span className='badge badge-warning' id='lblCartCount'>
            {
              props.email ? props.email.slice(0,4):
              "login"
            }
          </span>
        </Div>
        <FontAwesome name="user" style={{padding:'5px', color:props.color ? props.color:'white'}} />
      </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
