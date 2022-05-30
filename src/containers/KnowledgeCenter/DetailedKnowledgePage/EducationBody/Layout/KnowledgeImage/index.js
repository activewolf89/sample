import React from 'react';
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';
import ModalImage from "react-modal-image";


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {
        props.sentImage !== '' &&
        <Div  display='flex'  justifyContent='space-between'>

          {
            (!props.sentImage.includes('.jpg') && !props.sentImage.includes('.png')) ?
              <Div   width='300px' height='300px'>
                <Vision360
                  ItemKey = {props.sentImage}
                />
              </Div>:
              <Div width='100%' maxWidth='40vw' minWidth='300px'>
                <ModalImage
                  className = "testImages"
                  small={props.sentImage}
                  large={props.sentImage}
                  alt=""
                />
              </Div>
          }
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
