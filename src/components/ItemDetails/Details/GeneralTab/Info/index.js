import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import Bracelets from './DetailGrid/Bracelets';
import FineRings from './DetailGrid/FineRings';
import Engagement from './DetailGrid/Engagement';
import Earrings from './DetailGrid/Earrings';
import Gents from './DetailGrid/Gents';
import Ladies from './DetailGrid/Ladies';
import Necklaces from './DetailGrid/Necklaces';
import Other from './DetailGrid/Other';
import Watches from './DetailGrid/Watches';
import Diamonds from './DetailGrid/Diamonds';
import Ul from 'shared/Ul'
import Li from 'shared/Li'
const Info = (props) =>{
  return (
    <Div>
      <Ul childrenPadding='5px' display='flex' flexDirection='column'>
        <Li>
          <Div>
            Item:
            {props.Item.ItemKey}
          </Div>
        </Li>
        <Li>
          <Div>
            {props.Item.ItemVendorName}:   {props.Item.ItemVendStyleCode}
          </Div>
        </Li>

      </Ul>
      {
        props.Item.CategoryId === 140 ?
          <Li>
            <Engagement
              Item ={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 110 ?
          <Li>
            <Gents
              Item ={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 115 ?
          <Li>
            <Ladies
              Item={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 150 ?
          <Li>
            <Earrings
              Item={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 165 ?
          <Li>
            <Necklaces
              Item={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 170 ?
          <Li>
            <Bracelets
              Item={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 130 ?
          <Li>
            <FineRings
              Item={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 500 ?
          <Li>
            <Watches
              Item={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 999 ?
          <Li>
            <Other
              Item={props.Item}
            />
          </Li>:
        props.Item.CategoryId === 190 ?
          <Li>
            <Diamonds
              Item={props.Item}
            />
          </Li>:
        ''
      }


    </Div>

  )
}
Info.propTypes = {
  item: PropTypes.object,
}
export default Info;
