import React from 'react';
import Div from 'shared/Div';

import KnowledgeOptionlist from './KnowledgeOptionlist';

// -----
const funcC0mp = (props) =>{
  return (
    <Div   >
      <KnowledgeOptionlist
        collapse = {props.collapse}
        history = {props.history}
        knowledgeArray ={props.knowledgeArray}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
