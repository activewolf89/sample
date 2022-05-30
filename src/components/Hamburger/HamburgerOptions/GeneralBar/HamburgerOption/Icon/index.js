import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import {H4,H5} from 'shared/H';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter.js';

// -----
const Icon = (props) =>{
  return (
    <Div padding="10px 0 " width="100%" display='flex' justifyContent='space-between'>
      <Div>
        {
          props.bold ?
            <Div fontStyle="italic" >
              <H4>
                {CapitalizeFirstLetter(props.iconKey)}
              </H4>
            </Div>:
            <H5 >
              {CapitalizeFirstLetter(props.iconKey)}
            </H5>
        }
      </Div>
      
    </Div>
  )
}
Icon.propTypes = {
}
export default Icon;
