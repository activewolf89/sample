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
          name={"Size"}
          value={props.Item.ItemSize}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Width"}
          value={props.Item.ItemLength + "mm"}
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
      <Li>
        <ItemStyle
          name={"Sizable?"}
          value={props.Item.Sizable ? 'yes':'no'}
        />
      </Li>
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
