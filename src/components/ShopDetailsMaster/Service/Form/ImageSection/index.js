import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import Title from 'shared/Title'
import Input from 'shared/Input'

import FontAwesome from 'react-fontawesome';
// -----
const ImageSection = (props) =>{
  console.log(props)
  return (
    <Div>

    <NoMPUl childrenPadding="5px 5px" margin="10px 0" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Li>
      <Title underline>Images Of {props.requestObject.category}</Title>
    </Li>
    <Li>
     {props.requestObject.photos.length} images uploaded
    </Li>
    <Li>
      <Input  error={props.requestObject.requestValidators.photo} type="file" onChange={(e)=>{props.onPhotoChange(e)}} multiple />
      <Title fontStyle="italic" fontSize="14px">{props.requestObject.requestValidators.photo}</Title>

    </Li>
    </NoMPUl>
    <NoMPUl display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" childrenPadding="5px 5px">
      {
        props.requestObject.photos.map((photo,index,array)=>{
          return (
            <Li key={index}>
            <Div >
              <Div themed borderBottom="1px solid white" borderRadius="5px 5px 0 0">
              <NoMPUl childrenPadding="0 5px"  height="30px" display="flex" justifyContent="space-between" alignItems="center" themed borderRadius ='5px 5px 0px 0px'>
                <Li>
                  {index + 1}
                </Li>
                <Li onClick={()=>{props.onPhotoDelete(index)}}>
                  <FontAwesome style={{color:'red'}} name={"minus-circle"}/>
                </Li>
              </NoMPUl>
            </Div>
              <img src={photo} alt="eng. ring" style={{width:'100px',height:'100px', borderRadius:'0px 0px 5px 5px'}} />
          </Div>
          </Li>
          )
        })
    }


  </NoMPUl>
</Div>
  )
}
ImageSection.propTypes = {
  onPhotoDelete: PropTypes.func.isRequired,
  onPhotoChange: PropTypes.func.isRequired,
  requestObject: PropTypes.object.isRequired
}
export default ImageSection;
