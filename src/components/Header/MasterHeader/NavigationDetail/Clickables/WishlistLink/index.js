import React from 'react';
import Div from 'shared/Div';
import cookie from 'react-cookies'
import FontAwesome from 'react-fontawesome';
import SideNumber from 'shared/SideNumber';
import styled from 'styled-components'
require('./numberWithItem.css')
const StyledDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 996px) {
  display: block;
  }
`
  var CheckString = function(str){
    let cookieString = cookie.loadAll()[str]

    return cookieString
  }


  const funcC0mp = (props) =>{
    var cookieString = CheckString('wishlistItems') === "" ? CheckString("wishlistItems"):[0] === "," ? CheckString('wishlistItems').split(',').slice(1).join(','):CheckString('wishlistItems')
    var isTrue = (cookieString !== undefined && cookieString !== "")
    var StructuredRequest = function(){
      props.history.push('/shop?ItemKey=' + cookieString)
  }
  return (
    <Div   onClick={()=>{StructuredRequest() }}>
      <Div color='white' textAlign='center' position='relative' >
        <FontAwesome style={{color:'red'}} size='lg' name="heart" />
        <SideNumber
          number = {cookieString ? cookieString.split(',').length:"0"}
        />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
