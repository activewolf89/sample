import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import NoImage from 'images/NoImage.png';
import V360Button from './V360Button'
// -----
const funcC0mp = (props) =>{

  return (
    <Div  overflowX='auto' display='inline-flex' cursor='pointer'>

      <NoMPUl display='flex' flexWrap='wrap' justifyContent='center'  childrenBorderRight='2px solid white' >
        <Li onClick={()=>{props.onChangeView(0)}}>
          <Div bottomSelected = {props.imageIndex === 0}>
            <V360Button
              stillShot={props.stillShot}

            />
          </Div>
        </Li>
        {props.ArrayOfImages.map((arr,idx)=>{
          return(
            <Li key={idx} onClick={()=>{props.onChangeView(idx + 1)}}>
              <Div  bottomSelected = {props.imageIndex === idx + 1}>
                <img src={arr[idx]} style={{width:'100px',height:'100px'}} alt={NoImage} />
              </Div>
            </Li>
          )
        })}
      </NoMPUl>
      {

      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
