import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P'
import Span from 'shared/Span'

// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='20px'>
      <P fontStyle='italic' textAlign='center'>
        "Any stock purchases made without any modification can be returned up to 30 days after purchase.  All pieces will come in a presentation box, and can be gift-wrapped per instruction."
        <Span whiteSpace='noWrap'>-L T Denny</Span>
      </P>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
