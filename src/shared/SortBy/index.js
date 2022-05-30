import React from 'react';
import Div from 'shared/Div';
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';
import RedRibbon from 'images/redRibbonSvg.svg'
// -----

var CheckIt = function(history,value,searchFor){
  if(!history.location.search.includes(value)){
    return searchFor
  } else {
    return ''
  }
}
const funcC0mp = (props) =>{
  var SearchString = props.searchKey + '=' + props.searchFor
  return (
    <Div display='flex' alignItems='center' onClick={()=>{AddOntoSearchSegment(props.searchKey,CheckIt(props.history,SearchString,props.searchFor),props.history)}} cursor='pointer'>
      <Div >
        {props.title}
      </Div>
      {
        props.searchKey === 'onSale' &&
        <Div>
          {
            props.history.location.search.includes('onSale') &&

            <img src={RedRibbon} style={{width:'30px',height:'30px'}} alt='' />
          }

        </Div>

      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
