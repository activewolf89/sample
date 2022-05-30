import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import PhotoLinkGrid from 'shared/PhotoLinkGrid'
import TopOptions from './TopOptions';
import styled from 'styled-components';

const StyledDiv1 = styled(Div)`
display: block;
  @media only screen and (min-width: 996px) {
  display: none;
  }

`
const StyledDiv2 = styled(Div)`
display: none;
  @media only screen and (min-width: 996px) {
    display: block;
  }

`

// -----
const IntroSection = (props) =>{
  return (
    <Div>
      <StyledDiv1 >
        <TopOptions
          categoryNames={props.categoryNames}
          history ={props.history}
          title={props.title}
          rootString = {props.rootString}

        />
      </StyledDiv1>
      <StyledDiv2>

        <Div padding='10px 0'  display="flex" flexDirection='column' alignItems='center'  justifyContent="center" >
          <PhotoLinkGrid
            categoryNames={props.categoryNames}
            fromIntro
            history ={props.history}
            title={props.title}
            rootString = {props.rootString}
          />

        </Div>
      </StyledDiv2>
    </Div>

  )
}
IntroSection.propTypes = {
  rootString:  PropTypes.string.isRequired,
  title: PropTypes.string.isRequired

}
export default IntroSection;
