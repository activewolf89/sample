import Div from 'shared/Div';

import React from 'react';
//shared
import Title from 'shared/Title';
import StyledLink from 'shared/StyledLink';
import P from 'shared/P';
import Button from 'shared/Button';
// -----
const Article = (props) =>{

  return (
    <Div>
      {!props.shop &&
    <StyledLink to={props.to}>
        <Div
          backgroundImg={props.backgroundImg}
          backgroundSize="contain"
          backgroundPosition="center"
          backgroundColor="black"
          height={props.height ? props.height: '200px'}
          backgroundRepeat="no-repeat">
        </Div>
        <Div themed display="flex" flexDirection="column" alignItems='center' justifyContent="center">
          <Title capitalize underline  >{props.title}</Title>
          <P textAlign="center">{props.description}</P>
        </Div>
    </StyledLink>
  }
  {props.shop &&
    <Div>

    <Div
      backgroundImg={props.backgroundImg}
      backgroundSize="contain"
      backgroundPosition="center"
      backgroundColor="black"
      height={props.height ? props.height: '200px'}
      backgroundRepeat="no-repeat">
    </Div>
    <Div themed display="flex" flexDirection="column" alignItems='center' justifyContent="center">
      <StyledLink to={props.to}>
      <Button shop={props.shop}>
      <Title capitalize  >{props.title}</Title>
    </Button>
  </StyledLink>
      <P textAlign="center">{props.description}</P>
    </Div>
  </Div>
  }
  </Div>

  )
}
Article.propTypes = {
}
export default Article;
