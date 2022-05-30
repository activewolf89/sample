import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import styled from 'styled-components';



require('./threshold.css')
  var StyledDiv = styled(Div)`
  h1 {
    text-align:center;

    font-size: 28px;
    @media only screen and (min-width: 996px) {
      font-size: 36px;

    }
   overflow: hidden;
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


// -----
const MathEquation = (props) =>{
  return (
    <Div  width='100vw' maxWidth='2000px'  cursor='pointer'>
      <Div >
        <Div >
          <Div position='relative'   padding='10px 0' >
            <StyledDiv >
              <h1 style={{textAlign:'center',fontStyle:'italic'}} >
                {props.name}
              </h1>
            </StyledDiv>
            <Div  textAlign='center' fontStyle='italic'>
              <P>
                {props.smallWords}
              </P>
            </Div>
          </Div>
        </Div>
      </Div>

    </Div>
  )
}
MathEquation.propTypes = {
}
export default MathEquation;
