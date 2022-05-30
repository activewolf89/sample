import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';
import A from 'shared/A';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {
        !props.checkedRight &&
        <FontAwesome name='check-circle' style={{margin:'5px'}} />
      }
      {

        props.destinationArray.map((obj,idx,arr)=>{
          return(
            <Div key={idx} display='inline-block' >
              <StyledLink key={idx} to={obj.linkTo}>
                <A key={idx}>
                  <Div  themedAccent>

                    { obj.words}
                    {
                      idx !== arr.length - 1 &&
                      ", "
                    }
                  </Div>
                </A>
              </StyledLink>
            </Div>
          )
        })
      }
      {
        props.checkedRight &&
        <FontAwesome name='check-circle' style={{margin:'5px'}} />
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
