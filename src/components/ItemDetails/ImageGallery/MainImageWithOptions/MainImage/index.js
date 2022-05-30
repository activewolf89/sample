import React from 'react';
import Div from 'shared/Div';
import ReactImageMagnify from 'react-image-magnify';
import StyledIframe from 'shared/StyledIframe'
import styled from 'styled-components';
import GenerateSrcLink from 'containers/App/HelperFunctions/GenerateSrcLink.js'
const StyledDiv =  styled(Div)`
  width: 100vw;
  height: 100vw;
  @media only screen and (min-width: 500px) {
    width: 508px;
    height: 508px;
  }
@media only screen and (min-width: 996px) {
  width: 409px;
  height: 409px;
}
@media only screen and (min-width: 1500px) {
  width: 608px;
  height: 608px;
}

`

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {
        (props.imageIndex === 0 && props.ItemInventoryType !== "M") ?
          <Div >
            <StyledIframe
              movieName={props.ItemStyle}
              ItemKey={props.ItemKey}
              ItemStyle = {props.ItemStyle}
            >
            </StyledIframe>
          </Div>:
          <Div  >
            <StyledDiv >
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'ring shot',
                  isFluidWidth:true,
                  src:GenerateSrcLink(props.ItemStyle,props.imageIndex)

                },
                largeImage: {
                  src: GenerateSrcLink(props.ItemStyle,props.imageIndex),
                  width: 1200,
                  height: 1200
                },
                enlargedImagePosition:'over',
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: false
              }} />
            </StyledDiv>

          </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
