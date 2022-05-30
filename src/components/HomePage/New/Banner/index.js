import React from 'react';
import Div from 'shared/Div';
import styled,{css} from 'styled-components';
import CallToAction from './CallToAction'
import ReWords from './ReWords'
import LongImage from '../LongImage';
import WebImage from 'images/2020Christmas/ribbonspics2.jpg'
import { RibbonContainer,  LeftLargeRibbon,RightLargeRibbon  } from "react-ribbons";

const StyledDiv = styled(Div)`
  position: relative;
  height: 50vh;
  background-image: url(${props => props.mobile});
  @media only screen and (min-width: 996px) {
    background-image: url(${props => props.desktop});
  height: 600px
  }
`

const FloatingDiv = styled(Div)`
  position: absolute
  top: 80%;
  left: 50%;
  width: 100%;
  @media only screen and (min-width: 996px) {
  width: auto;
  }
  transform: translate(-50%,-50%);
`
const FloatingDiv2 = styled(Div)`

  position: absolute
  top: 10%;
  left: 50%;
  width: 100%;
  @media only screen and (min-width: 996px) {
  width: auto;
  }
  transform: translate(-50%,-50%);
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div  backgroundColor='black' color='pink'  >

      <StyledDiv  width='100%'  height='400px' mobile={props.WebImage[0]} desktop={props.WebImage[1]} backgroundSize='contain' backgroundPosition='center' backgroundRepeat='no-repeat'>
        {
          props.ribbonColor &&
          <RibbonContainer className="custom-class">

            {
              props.left  ?
                <LeftLargeRibbon backgroundColor={props.ribbonColor} color="#f0f0f0" fontFamily="Arial">
                  <small style={{whiteSpace:'noWrap', fontWeight:'bold'}}>
                    {props.ribbonText}
                  </small>
                </LeftLargeRibbon>:
                <RightLargeRibbon backgroundColor={props.ribbonColor} color="#f0f0f0" fontFamily="Arial">
                  <small style={{whiteSpace:'noWrap', fontWeight:'bold'}}>
                    {props.ribbonText}
                  </small>
                </RightLargeRibbon>
            }
          </RibbonContainer>
        }
        <FloatingDiv >
          <CallToAction buttonObj={props.buttonObj} text={props.text}/>
        </FloatingDiv>
        <FloatingDiv2  textAlign='center'>
          <ReWords text={props.text} small />
        </FloatingDiv2>
      </StyledDiv>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
