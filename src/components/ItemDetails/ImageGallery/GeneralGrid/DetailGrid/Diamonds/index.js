import React from 'react';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import ItemStyle from '../Shared/ItemStyle';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';

// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl childrenPadding='5px' display='flex' flexDirection='column'>
      <Li>
        <ItemStyle
          name={"Shape"}
          value={CapitalizeFirstLetter(props.Item.MainShape)}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Carat"}
          value={props.Item.StoneTWT}
        />
      </Li>

      <Li>
        <ItemStyle
          name="Cut"
          value = {CapitalizeFirstLetter(props.Item.StoneMake)}
        />
      </Li>

      <Li>
        <ItemStyle
          name={"Color"}
          value={CapitalizeFirstLetter(props.Item.StoneHue)}
        />
      </Li>
      <Li>
        <ItemStyle
          name={"Clarity"}
          value={CapitalizeFirstLetter(props.Item.StoneClarity)}
        />
      </Li>
      <Li>
        <ItemStyle
          name={CapitalizeFirstLetter(props.Item.StoneLab)}
          value={props.Item.StoneCert}
        />
      </Li>

    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
