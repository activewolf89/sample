import React from 'react';
import Div from 'shared/Div';
import FindPreference from '../FindPreference.js'
import Span from 'shared/Span';
import P from 'shared/P';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='20px 0' display='flex' justifyContent='center' alignItems='center'>

      <Div>
        <P textAlign='center'>
          Thank you <Span fontWeight='bold'> {props.preferredContact.name.value}</Span> for scheduling an appointment to come see us,<br />
          we will reach out to you via <Span fontWeight='bold'>{FindPreference(props.preferredContact)}</Span> at <Span fontWeight='bold'>{props.preferredContact[FindPreference(props.preferredContact)].value}</Span> to confirm
          an appointment on <Span fontWeight='bold'>{props.preferredContact.date.value.toDateString()} at {props.preferredContact.time.value}</Span> <br />
        </P>
      </Div>
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
