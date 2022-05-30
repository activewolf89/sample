import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import FontAwesome from 'react-fontawesome';
// -----
const WelcomeToWishlist = (props) =>{
  return (
    <Div    display="flex" flexDirection="column" alignItems="center" justifyContent='center'  padding="10px">
      <Div margin="10px">
        <Title capitalize bold> {props.count} <FontAwesome name="heart" style={{color:'red'}} /> on wishlist </Title>
      </Div>
    </Div>
  )
}
WelcomeToWishlist.propTypes = {
}
export default WelcomeToWishlist;
