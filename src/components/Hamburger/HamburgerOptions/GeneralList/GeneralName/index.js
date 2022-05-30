import React from 'react';
import Div from 'shared/Div';
import {H5} from 'shared/H';
import FontAwesome from 'react-fontawesome';

// -----
const funcC0mp = (props) =>{
  return (
    <Div color={props.color ? props.color:'black'} fontWeight={props.bold ? 'bold':''} fontStyle={props.fontStyle ? props.fontStyle:''} >
      <H5 bold>
        <FontAwesome name={props.name} style={{marginRight:'5px'}} />
        {props.title}
      </H5>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
