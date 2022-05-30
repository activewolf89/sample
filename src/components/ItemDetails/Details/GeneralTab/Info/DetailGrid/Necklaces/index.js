import React from 'react';
import Ul from 'shared/Ul'
import Li from 'shared/Li'
import ItemStyle from '../Shared/ItemStyle';
import CenterStone from '../Shared/CenterStone';
import ContainsStones from '../Shared/ContainsStones';

// -----
const funcC0mp = (props) =>{
  return (
    <Ul childrenPadding='5px' display='flex' flexDirection='column'>
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
          name={"Chain Thickness"}
          value={props.Item.ItemSize + "mm"}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Chain Length"}
          value={props.Item.ItemLength + `"`}
        />
      </Li>
      {
        props.Item.Stones.length > 0 &&
        <Li>
          <CenterStone
            name="Center Stone"
            value = {props.Item.Stones[0].PairValue.StoneShape}
            sideNote={props.Item.Stones[0].PairValue.StoneType}
            stoneDimensions = {(props.Item.Stones[0].PairValue.StoneLengthMax + "x" + props.Item.Stones[0].PairValue.StoneLengthMin + "mm")}
          />
        </Li>
      }
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
