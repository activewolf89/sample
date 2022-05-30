import React from 'react';
import Div from 'shared/Div';


// -----
const ColorCircle = (props) =>{
  function ConvertColor(key){
    const colorObj = {
      'white':'gray',
      'rose':'salmon',
      'yellow':'gold'
  }
  return colorObj[key.toLowerCase()]

  }
  return (
    <Div borderTop='1px solid gray' borderBottom='1px solid gray' width='25px' height='25px' borderRadius='25px' display='flex' flexWrap='nowrap'>
      {
        props.colorArray[0] && props.colorArray.length === 1 ?
          <Div width='100%' backgroundColor={ConvertColor(props.colorArray[0])} height='100%' borderRadius='25px'>

          </Div>:
          <Div width='25px' height='25px' display='flex' flexWrap='nowrap'>
            {
              props.colorArray[0] &&
              <Div width='50%' backgroundColor={ConvertColor(props.colorArray[0])} height='100%' borderRadius='25px 0 0 25px'>

              </Div>
            }
            {
              props.colorArray[1] &&
              <Div width='50%' backgroundColor={ConvertColor(props.colorArray[1])} height='100%' borderRadius='0 25px 25px 0'>

              </Div>
            }
          </Div>
      }


    </Div>
  )
}
ColorCircle.propTypes = {
}
export default ColorCircle;
