import React from 'react';
import Div from 'shared/Div';
import FindPreference from '../FindPreference.js'
import Span from 'shared/Span';
import Vision360 from 'shared/Vision360';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import P from 'shared/P';
// -----
const funcC0mp = (props) =>{
  return (
    <Div>
      <NoMPUl display='flex' flexDirection='column' alignItems='center' padding='10px 0'>
        <Li textAlign='center'>
          <P>
            Hey {props.preferredContact.name.value}, <br />
            we will reach out to you via <Span fontWeight='bold'>{FindPreference(props.preferredContact)}</Span> at <Span fontWeight='bold'>{props.preferredContact[FindPreference(props.preferredContact)].value}</Span> to set up communication.
            Expect an email within one business day with a formal quote and logistics for this item <Span fontWeight='bold'>{props.product.ItemKey}</Span>.
          </P>
        </Li>
        <Li>
          <Div display='flex' justifyContent='center' themed>
            <Vision360
              ItemKey = {props.product.ItemKey}
            />
          </Div>
        </Li>
      </NoMPUl>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
