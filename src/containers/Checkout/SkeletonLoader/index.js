import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Skeleton,{ SkeletonTheme }  from 'react-loading-skeleton';
import styled from 'styled-components';

const StyledDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 996px) {
  display: block;
  }
`
const Styled1Div = styled(Div)`
display: block;
  @media only screen and (min-width: 996px) {
    display: none;
  }
`
// -----
const funcC0mp = (props) =>{
  var emptyArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <Div margin='10px 0 0 0'>
      <SkeletonTheme>
        <Styled1Div>

          <NoMPUl display='flex' childrenPadding='5px 0' flexDirection='column'>
            {emptyArray.map((digit)=>{
              return (
                <Li key={digit}>
                  <Div
                    width='100%'
                    height='180px'
                    slightBoxShadow
                  >
                    {
                      props.bla ||
                      <Skeleton
                        height={120}
                        count={1}
                      />
                    }

                  </Div>
                </Li>
              )
            })}
          </NoMPUl>
        </Styled1Div>
        <StyledDiv>

          <NoMPUl display='flex' justifyContent='center' childrenPadding='10px' flexWrap='wrap'>
            {emptyArray.map((digit)=>{
              return (
                <Li key={digit}>
                  <Div
                    width='300px'
                    height='500px'
                    padding='10px'
                    slightBoxShadow
                  >
                    {
                      props.bla ||
                      <Skeleton
                        height={100}
                        count={1}
                      />
                    }

                  </Div>
                </Li>
              )
            })}
          </NoMPUl>
        </StyledDiv>
      </SkeletonTheme>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
