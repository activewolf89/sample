import React from 'react';
import Div from 'shared/Div';
import {H1} from 'shared/H';
import PhotoLinkGrid from 'shared/PhotoLinkGrid'
// -----
const LandingPage = (props) =>{
  return (
    <Div display='flex' flexDirection='column' alignItems='center'  backgroundPosition='center' backgroundSize='contain' backgroundRepeat='no-repeat' themed >

      <H1 textAlign='center'>Learn About</H1>
      <Div  maxWidth='1300px'>

        <PhotoLinkGrid
          history={props.history}
          knowledgeArray = {props.knowledgeArray}
        />
      </Div>
      </Div>

  )
}
LandingPage.propTypes = {
}
export default LandingPage;
