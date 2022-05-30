import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import styled from 'styled-components';
import Title from 'shared/Title';
import ArticleDiv from 'shared/Article';
// -----
const Articles = (props) =>{

  return (
    <Div display="flex" justifyContent="space-around">
      <ArticleDiv themed>
test
      </ArticleDiv>
      <ArticleDiv themed>
test
      </ArticleDiv>
      <ArticleDiv themed>
test
      </ArticleDiv>
    </Div>
  )
}
Articles.propTypes = {
}
export default Articles;
