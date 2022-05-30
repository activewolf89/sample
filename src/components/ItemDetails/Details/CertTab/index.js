import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';
import { CSSTransition } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
import ReactImageMagnify from 'react-image-magnify';
import NoImage from 'images/NoImage.png';
// -----

var findStaticImage = function(ArrayOfImages){
  var Image = NoImage
  ArrayOfImages.forEach((image,idx)=>{
    var imageString = image[idx]
    if(imageString.includes('cert')){
      Image = imageString
    }

  })

  return Image
}

const CertTab = (props) =>{
  return (
    <Div >
      <NoMPUl display="flex" flexDirection="column"  >
        <Li >
          <Div backgroundColor="lightgray"
            display="flex"
            padding="20px"
            justifyContent="space-between"
            onClick={()=>{props.onDetailClick('cert')}}
          alignItems="center">
            <Title>Certificate Image</Title>
            <FontAwesome name={props.isOn ?"minus":"plus"}/>
          </Div>
        </Li>
        <Div>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Div   backgroundRepeat='no-repeat' >
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'ring shot',
                  width: 400,
                  height: 200,
                  isFluidWidth: true,
                  src:findStaticImage(props.item._Vision360Static.ArrayOfImages)
                },
                largeImage: {
                  src:findStaticImage(props.item._Vision360Static.ArrayOfImages),
                  width: 2000,
                  height: 1000,
                },
                enlargedImagePosition:'over',
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: false
              }} />
            </Div>
          </CSSTransition>
        </Div>
      </NoMPUl>
    </Div>
  )
}
CertTab.propTypes = {
  isOn: PropTypes.bool.isRequired,
}
export default CertTab;
