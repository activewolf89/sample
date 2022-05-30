import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
import CallToAction from '../Banner/CallToAction'
import ReWords from '../Banner/ReWords'

const FloatingDiv = styled(Div)`
  position: absolute
  top: 100%;
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
    <Div >
      <FloatingDiv >
        <CallToAction buttonObj={{url:props.buttonObj.url, text:props.buttonObj.name}} text={props.text}/>
      </FloatingDiv>
      <FloatingDiv2  textAlign='center'>
        <ReWords text={props.text} small />
      </FloatingDiv2>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
