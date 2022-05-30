import React from 'react';
import Div from 'shared/Div';
import EducationNavigation from 'containers/KnowledgeCenter/DetailedKnowledgePage/EducationNavigation';

// -----
const funcC0mp = (props) =>{
  return (
    <Div height='100vh' overflowY='auto'>
      <EducationNavigation
        history={props.history}
        knowledgeArray={props.knowledgeArray}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
