import React from 'react';
import Div from 'shared/Div';
import cookie from 'react-cookies'
import FontAwesome from 'react-fontawesome';
import SideNumber from 'shared/SideNumber';
import styled from 'styled-components'
import StyledLink from 'shared/StyledLink';
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
    var cookieString = CheckString('checkOutItem') === "" ? CheckString("checkOutItem"):[0] === "," ? CheckString('wishlistItems').split(',').slice(1).join(','):CheckString('wishlistItems')
    var isTrue = (cookieString !== undefined && cookieString !== "")
    var StructuredRequest = function(){
      props.history.push('/shop?ItemKey=' + cookieString)
    }
  return (
    <Div  height='100%' position='relative'   >

      <Div
        color='white'
        textAlign='center'
        position='relative'
        fontWeight='bold'
        height='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <StyledLink to='/cart'>
          <FontAwesome style={{color:'white'}} size='lg'  name="shopping-cart" />
          <SideNumber
            number = {cookie.loadAll()['checkOutItem'] ? cookie.loadAll()['checkOutItem'].split(',').length:'0'}
          />
        </StyledLink>
        </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
