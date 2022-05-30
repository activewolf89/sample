import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';

// -----
const ButtonsToShop = (props) =>{
  return (
    <Div  borderRadius='0 5px' display='flex' >
      {
        props.fromListView  ?
          <Button width='50%' height='100%' lightThemed onClick={()=>{props.onViewDetails(props.item)}}>
            Details
          </Button>:
          <Button width='50%' height='100%' lightThemed onClick={()=>{props.onViewDetails(props.item)}}>
            <StyledLink to={props.item.ItemDirectLink} color='black'>
              Details
            </StyledLink>
          </Button>
      }
      <Button  width='50%' height='100%' themed onClick={props.onToggle}>
        <Div display='flex' alignItems='flex-end' justifyContent='center'>
          Actions
          <FontAwesome name={props.isActive ? 'caret-up':'caret-down'} style={{marginLeft:'5px'}}/>
        </Div>
      </Button>
    </Div>
  )
}
ButtonsToShop.propTypes = {
}
export default ButtonsToShop;
