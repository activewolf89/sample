import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';
// -----

var CheckIt = function(history,value,searchFor){
  const search = history.location.search;
  if(search.includes('high-to-low')){
    return ''
  } else if(search.includes('low-to-high')){
    return 'high-to-low'
  } else {
    return 'low-to-high'
  }

}
const funcC0mp = (props) =>{
  var SearchString = props.searchKey + '=' + props.searchFor
  return (
    <Div display='flex' onClick={()=>{AddOntoSearchSegment(props.searchKey,CheckIt(props.history,SearchString,props.searchFor),props.history)}} cursor='pointer'>
      <Div padding='0 5px 0 0'>
        <small>
          {props.title}
        </small>
      </Div>
      {
        !props.history.location.search.includes('sort') &&
        <Div>
          <FontAwesome name='arrow-down' />
          <FontAwesome name='arrow-up'  />
        </Div>
      }
      {
        props.history.location.search.includes('?sort=high-to-low') &&
        <Div>
          <FontAwesome name='arrow-down' style={{}} />
          <FontAwesome name='arrow-up' style={{color:'green'}} />
        </Div>
      }
      {
        props.history.location.search.includes('?sort=low-to-high') &&
        <Div>
          <Div>
            <FontAwesome name='arrow-down' style={{color:'red'}} />
            <FontAwesome name='arrow-up'  />
          </Div>
        </Div>
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
