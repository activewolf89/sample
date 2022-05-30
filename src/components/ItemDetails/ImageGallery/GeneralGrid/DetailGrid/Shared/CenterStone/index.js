import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {props.name}:   <Span fontStyle='italic'>{CapitalizeFirstLetter(props.value)}
        {
          " " +  props.sideNote  + " "
        }
        {
          props.stoneDimensions === 'nullxnullmm' ? '*dimensions unknown*':"*" + props.stoneDimensions + "*"
        }
      </Span>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;

//
// name="Center is"
// value = {CapitalizeFirstLetter(props.Item.Stones[0].PairValue.StoneShape)}
// sideNote={CapitalizeFirstLetter(props.Item.Stones[0].PairValue.StoneType)}
// stoneDimensions = {(props.Item.Stones[0].PairValue.StoneLengthMax + "x" + props.Item.Stones[0].PairValue.StoneLengthMin + "mm")}
