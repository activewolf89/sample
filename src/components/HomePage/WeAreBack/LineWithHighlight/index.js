import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
import Span from 'shared/Span'



require('./threshold.css')
  var StyledDiv = styled(Div)`
  h1 {
    font-size: 28px;
    @media only screen and (min-width: 996px) {
      font-size: 36px;

    }
   overflow: hidden;
   text-align: center;
  }
  h1:before,
  h1:after {
   background-color: gray;
   content: "";
   display: inline-block;
   height: 3px;
   position: relative;
   vertical-align: middle;
   width: 50%;
  }
  h1:before {
   right: 0.5em;
   margin-left: -50%;
  }
  h1:after {
   left: 0.5em;
   margin-right: -50%;
  }
  `
  var StyledDivSpan = styled(Div)`
    padding: 0 0 8px 0;
  h4 {
    height: 18px;
   overflow: hidden;
   text-align: center;
  }
  h4:before,
  h4:after {
   background-color: white;
   content: "";
   display: inline-block;
   height: 3px;
   position: relative;
   vertical-align: middle;
   width: 50%;
  }
  h4:before {
   right: 0.5em;
   margin-left: -50%;
  }
  h4:after {
   left: 0.5em;
   margin-right: -50%;
  }
  `

// -----
const MathEquation = (props) =>{
  return (
    <Div  width='100vw' maxWidth='2000px' padding='10px 0' cursor='pointer'>
      <Div >
        <Div >
          <StyledDiv  themedLightColor>
            <StyledDivSpan position='relative'>
              <h1  fontWeight='bold' textAlign="center">
                <Span
                  pinkBackground = {props.highlightColor === "pink"}
                  highlightColor={props.highlightColor}
                >
                  {props.name}
                </Span>
              </h1>

            </StyledDivSpan>
          </StyledDiv>
        </Div>
      </Div>
      {
        props.smallWords &&
        <Div  textAlign='center' >
          <small style={{fontStyle:'italic'}}>
            {props.smallWords}
          </small>
        </Div>
      }
    </Div>
  )
}
MathEquation.propTypes = {
}
export default MathEquation;
