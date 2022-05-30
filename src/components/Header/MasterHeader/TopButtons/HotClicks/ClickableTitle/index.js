import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import Span from 'shared/Span';
import styled,{css} from 'styled-components';
import Button from 'shared/Button';
import slightImage from 'images/veins.jpg'
import ShoppingDropdown from 'shared/ShoppingDropdown'

const StyledButton = styled(Button)`
  color: white;

  background: url(${slightImage}) no-repeat;
          cursor:pointer;
          border: none;
          ${props => props.numberOfEvents && css`
            background: none;
            background-color:  #004d00;

          `}
`


require('./sale.css')
// -----
const funcC0mp = (props) =>{
  return (
      <Div position='relative' themed  width='100%' display='flex' alignItems='center' justifyContent='center'>
        <StyledButton width='100%'>
          {
            props.awesome === "shopping-cart" ?
              <ShoppingDropdown
                checkoutString = {props.checkoutString}
              color='white' />:
              <Div>

                {
                  props.awesome ?
                    <FontAwesome name={props.awesome} style={{color:props.color ? props.color:'white'}} />:
                    <Span>
                      {props.name}
                    </Span>
                }
              </Div>
          }

        </StyledButton>
        {props.numberOfEvents
          &&
          <Div position='absolute' color="white" bottom='0' right='0'>
            <small>
              ({props.numberOfEvents})
            </small>
          </Div>
        }
      </Div>
      )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
