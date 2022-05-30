import React from 'react';
import Div from 'shared/Div';
import StyledFa from 'shared/StyledFa';
import Button from 'shared/Button';



  const funcC0mp = (props) =>{
  return (
    <Div>
      {
        props.ItemStatus === "S" || props.isPending ?
          <Div>
            <Button  width='100%' circle   onClick={()=>{props.onContactClick('special order',props.item)}}>
              <StyledFa  name="shopping-cart"  style={{marginRight:'5px', color: 'black'}} />
              Special Order Request
            </Button>
          </Div>:
          <Div   position='relative' onClick={()=>{props.onAddToWishlist(props.ItemKey,props.userProfile,"checkOutItem")}} color='black'>
            {
              props.checkOutString && props.checkOutString.includes(props.ItemKey)?
                <Button  width='100%' circle   >
                  <StyledFa  name="shopping-cart"  style={{marginRight:'5px', color: 'black'}} />
                  Remove From Bag
                </Button>:

            <Button  width='100%' circle add   >
              <StyledFa  name="shopping-cart"  style={{marginRight:'5px', color: 'white'}} />
              Add To Bag
            </Button>
          }
        </Div>
      }
  </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
