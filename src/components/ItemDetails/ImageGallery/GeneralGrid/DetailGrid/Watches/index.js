import React from 'react';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import ItemStyle from '../Shared/ItemStyle';
import ContainsStones from '../Shared/ContainsStones';

// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl childrenPadding='5px' display='flex' flexDirection='column'>
      <Li>
        <ItemStyle
          name={"Style"}
          value={props.Item.ItemStyle}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Metal"}
          value={props.Item.ItemMetalType}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Bezel"}
          value={props.Item.ItemSize + "mm"}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Strap"}
          value={props.Item.ItemDetail_10}
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

    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
