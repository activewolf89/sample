import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';
import ConversationBanner from './ConversationBanner';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  padding='10px 0'>

      {
        props.history && props.history.location.search.includes('treasure') ?
          <Div>
            <H2 textAlign='center'>
              Treasure Chest
            </H2>
            <ConversationBanner
              history = {props.history}
              events = {props.events}
            />
          </Div>
        :
          <H2 textAlign='center'>
            {props.title}
          </H2>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
