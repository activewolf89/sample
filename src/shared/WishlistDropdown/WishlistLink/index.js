import React from 'react';
import Div from 'shared/Div';
import cookie from 'react-cookies'
import FontAwesome from 'react-fontawesome';
require('./numberWithItem.css')

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
    <Div   position='relative' onClick={()=>{StructuredRequest() }} >

      <Div width='30px' position='relative'>
        {
          isTrue ?
            <Div position='relative'>
              <FontAwesome style={{color:'red'}} name="heart" />
              <Div position='absolute' bottom='0%' left='100%'>
                <Div fontWeight='bold'>
                  <span className='badge badge-warning' id='lblCartCount'>
                    ({cookieString.split(',').length})
                  </span>
                </Div>
              </Div>
            </Div>
          :
          <Div onClick={props.onWishlistCLick}>
            <FontAwesome style={{color:'gray'}}  name="heart" />

          </Div>
        }


      </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
