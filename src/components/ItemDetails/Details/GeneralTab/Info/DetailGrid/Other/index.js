import React from 'react';
import Ul from 'shared/Ul'
import Li from 'shared/Li'
import ItemStyle from '../Shared/ItemStyle';
import ContainsStones from '../Shared/ContainsStones';
// -----
const funcC0mp = (props) =>{
  return (
    <Ul childrenPadding='5px' display='flex' flexDirection='column'>
      <Li>
        <ItemStyle
          name={"Category"}
          value={props.Item.ItemStyle}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Metal"}
          value={props.Item.ItemMetalType}
        />
      </Li>
      {
        props.Item.ContainsStones &&
        <Li>
          <ContainsStones
            value={props.Item.ContainsStones}
            diamondWeight={props.Item.ItemMetalWeight}
          />
        </Li>
      }
    </Ul>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
