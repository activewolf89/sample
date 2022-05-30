import React from 'react';
import Div from 'shared/Div';
//shared
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import {H5} from 'shared/H'
import Input from 'shared/Input'

import FontAwesome from 'react-fontawesome';
// -----
const ImageQuestion = (props) =>{
  return (
    <Div >
      <NoMPUl >
        <Li>
          <H5 >Images </H5>
        </Li>
        <Li>
          {props.photos.length} images uploaded
        </Li>
        <Li>
        </Li>
      </NoMPUl>
      <NoMPUl>
        <Li>
          <Input type="file" onChange={(e)=>{props.onPhotoChange(e)}} multiple />

        </Li>
      </NoMPUl>
      <NoMPUl display="flex"  flexWrap="wrap" childrenPadding='5px'>
        {
          props.photos.map((photo,index,array)=>{
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
                  <img src={photo} alt="eng. ring" style={{width:'200px',height:'200px',}} />
                </Div>
              </Li>
            )
          })
        }
      </NoMPUl>
    </Div>
  )
}
ImageQuestion.propTypes = {
}
export default ImageQuestion;
