import React from 'react';
import Div from 'shared/Div';
import FindPreference from '../FindPreference.js'
import Span from 'shared/Span';
// -----

// -----
const Service = (props) =>{
  return (
    <Div textAlign='center'>
      Thank you <Span fontWeight='bold'> {props.preferredContact.name.value}</Span> for sending us a service ticket,<br />
      we will reach out to you via <Span fontWeight='bold'>{FindPreference(props.preferredContact)}</Span> at <Span fontWeight='bold'>{props.preferredContact[FindPreference(props.preferredContact)].value}</Span>
      <br />once we have processed the request.
    </Div>
  )
}
Service.propTypes = {
}
export default Service;
