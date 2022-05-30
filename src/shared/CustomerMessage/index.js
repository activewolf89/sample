import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import CheckStock from './CheckStock'
import Span from 'shared/Span';
import NumberFormat from 'react-number-format'

// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      {
        props.isPending ?
          <Div>
            This {" " + props.item.CategoryGenDesc + " "} is <CheckStock isPending={props.isPending} ItemStatus = {props.item.ItemStatus} ItemType={props.item.ItemType} />,
            however may be special ordered if requested.  Reach out via Special Order or Ask A Question button to find out.
          </Div>:
          <Div>

            {
              props.item.ItemStatus === "S" ?
                <P fontStyle='italic'>
                  This {" " + props.item.CategoryGenDesc + " "} is <CheckStock ItemStatus = {props.item.ItemStatus} ItemType={props.item.ItemType} />,
                  however may be special ordered if requested.  Reach out via Special Order or Ask A Question button to find out.
                </P>:
                <P fontStyle='italic'>
                  This {" " + props.item.CategoryGenDesc + " "} is <CheckStock ItemStatus = {props.item.ItemStatus} ItemType={props.item.ItemType} />,
                  { props.item.ItemSpecialPrice !== null &&
                      ' currently on sale from '
                  }
                  {
                      props.item.ItemSpecialPrice !== null &&
                    <Div  display='inline-block' color='black' fontWeight='bold'>
                      <Span color='black'>
                        <NumberFormat  value={props.item.ItemRetailPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                      </Span>
                    </Div>
                  }
                  , {" "}  available for pick-up, or free insured two-day shipping.  See below for product details and return policy.
                </P>
            }
          </Div>
      }


    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
