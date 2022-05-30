  import React from "react";
  import Div from 'shared/Div';
  import DetailedKnowledgePage from './DetailedKnowledgePage'
  import HeaderTitle from 'shared/HeaderTitle';
  import Helmet from 'shared/Helmet'
  // -----
  const KnowledgeCenter = (props) =>{
    return (
      <Div   maxWidth='1200px' padding='0 10px'>
        <Helmet
          title =  "Learning Center"
          name = "Learning Center"
          href =  "www.ltdenny.com/knowledge-center"
          content="Customers interested in learning about a range of useful information,tips, and tutorials to narrow down their jewelry needs can find helpful information here."
        />
        <HeaderTitle
          title="Knowledge Center"
        />
        <Div  >
          <DetailedKnowledgePage
            categoryObjects = {props.categoryObjects}
            onFaqClick = {props.onFaqClick}
            knowledgeArray={props.knowledgeArray}
            history={props.history}
            googleReviewObject = {props.googleReviewObject}
            yelpReviewObject = {props.yelpReviewObject}
          />

        </Div>
      </Div>
    )
  }
  KnowledgeCenter.propTypes = {
  }


export default KnowledgeCenter;
