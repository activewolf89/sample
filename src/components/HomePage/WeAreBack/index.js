import React from 'react';
import Div from 'shared/Div';
import BackgroundMedia from './BackgroundMedia';
import VideoMaster from 'containers/VideoMaster'
// -----
var CreateString = function(){
  var arrayOfMonths = ["January","February","March","April",'May','June','July','August','September','October','November','December']
  var today = new Date();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
  return arrayOfMonths[mm - 1] + " " + yyyy
}
const funcC0mp = (props) =>{
  return (
    <Div  padding='5px 0' height='100%'  >

      <BackgroundMedia
        onContactClick = {props.onContactClick}
        name={"Banner Photo"}
      />
      <Div >
        <VideoMaster
          contactButton={{contactKey:"email",title:"Reach Out"}}
          name="A Tailored Experience!"
          desList={[`How we operate as of ${CreateString()}`, 'Who We Are', 'What separates us as your jewler']}
        />
      </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
