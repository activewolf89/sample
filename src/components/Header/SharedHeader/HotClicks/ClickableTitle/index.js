import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import Title from 'shared/Title';
import StyledLink from 'shared/StyledLink'
import CookieAmount from 'containers/App/HelperFunctions/CookieAmount';

// -----
const funcC0mp = (props) =>{
  return (
    <Div position='relative'>

      {
        props.theLink ?
          <StyledLink to={props.theLink}>
            <Div display='flex' flexDirection='column' alignItems='center' hoverable>
              <Div>

                <FontAwesome name={props.awesome} style={{color:props.color}} />
                {props.wishlistItems &&
                  'test'

                }
              </Div>
              <Title>
                {props.name}
              </Title>
            </Div>
          </StyledLink>:
          <Div display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' hoverable>
            <Div display='flex' justifyContent='center' alignItems='center'>

              <FontAwesome name={props.awesome}  style={{color:props.color}}/>
              <Div marginLeft="5px">

                {props.wishlistItems &&
                  <small >
                    {"(" + CookieAmount() + ")"}
                  </small>
                }
              </Div>
            </Div>
            <Title>
              {props.name}
            </Title>
          </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
{/* <Div position='absolute' top='0' right='0'>
  {"(" + props.wishlistItems.length + ")"}
</Div> */}
