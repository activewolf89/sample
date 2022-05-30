import React from 'react';
import Div from 'shared/Div';
import MainImage from './MainImage';
import ImageOptions from './ImageOptions';
function findStillShot(array){
  var linkToReturn = '';
  if(array.length > 0){
  array.forEach((obj,idx)=>{
    if(obj[idx].includes('still')){
      linkToReturn = obj[idx];
    }
  })
}
  return linkToReturn
}
// -----
const funcC0mp = (props) =>{
  return (
    <Div  width='100%'>
      <Div >
        <MainImage
          ItemKey = {props.ItemKey}
          imageIndex = {props.imageIndex}
          ArrayOfImages = {props.ArrayOfImages}
          ItemStyle = {props.ItemStyle}
          ItemInventoryType = {props.ItemInventoryType}
        />
      </Div>
      <Div width='100%' backgroundColor='lightGray' >
        <Div >
          {
            props.ArrayOfImages && props.ItemInventoryType !== "M" &&
            <ImageOptions
              stillShot = {findStillShot(props.ArrayOfImages)}
              imageIndex = {props.imageIndex}
              onChangeView = {props.onChangeView}
              ArrayOfImages = {props.ArrayOfImages}
            />
          }
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
