import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      Contains Stones:  [<Span fontStyle='italic'>{CapitalizeFirstLetter(props.value)}]

        {
          (props.diamondWeight !== '0' && props.diamondWeight !== null) &&
          "*" + props.diamondWeight + ' diamond cttw*'
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
