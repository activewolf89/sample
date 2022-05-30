import React from 'react';
import Div from 'shared/Div';
import {H1} from 'shared/H';
import PhotoLinkGrid from 'shared/PhotoLinkGrid'
import Countdown from 'shared/Countdown';
// -----
const LandingPage = (props) =>{
  return (
    <Div display='flex' flexDirection='column' alignItems='center'  backgroundPosition='center' backgroundSize='contain' backgroundRepeat='no-repeat' themed >
      {
        (props.categoryObjects.saleName && props.categoryObjects.saleName.ends !== '') ?
          <H1 textAlign='center'>{props.categoryObjects.saleName.title}</H1>:
          <H1 textAlign='center'>Sale</H1>


      }
      {
        (props.categoryObjects.saleName && props.categoryObjects.saleName.ends !== '') &&
        <Countdown
          showText
          date = {props.categoryObjects.saleName.ends}
        />
      }
      <Div  maxWidth='1300px'>
        <PhotoLinkGrid
          history={props.history}
          knowledgeArray = {props.knowledgeArray}
          onSaleObject={props.onSaleObject}
        />
      </Div>
      </Div>

  )
}
LandingPage.propTypes = {
}
export default LandingPage;
