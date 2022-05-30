import React from 'react';
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';

import FindPreference from '../FindPreference.js'
import NoMPUl from 'shared/NoMPUl';
import Span from 'shared/Span';
import Li from 'shared/Li';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      <NoMPUl display='flex' flexDirection='column' alignItems='center' padding='10px 0'>
        <Li textAlign='center'>

          <Div textAlign='center'>
            Thank you <Span fontWeight='bold'>{props.preferredContact.name.value}</Span> for <Span fontWeight='bold'>{props.choiceKey}</Span>,<br />
            we will reach out to you via <Span fontWeight='bold'>{FindPreference(props.preferredContact)}</Span> at <Span fontWeight='bold'>{props.preferredContact[FindPreference(props.preferredContact)].value}</Span> to confirm <br />
            <Span fontWeight='bold'>{props.preferredContact.date.value.toDateString()} at {props.preferredContact.time.value}</Span> <br />
            to view this item: <Span fontWeight='bold'>{props.product.ItemKey}</Span>
          </Div>
        </Li>
        <Li display='flex' justifyContent='center' themed>
          <Div display='flex' justifyContent='center' themed>
            <Vision360 ItemKey = {props.product.ItemKey} />
          </Div>
        </Li>

      </NoMPUl>

      </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
