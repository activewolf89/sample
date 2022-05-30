import React from 'react';
import Div from 'shared/Div';
import RedRibbon from 'images/redRibbonSvg.svg';
import A from 'shared/A';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='inline-block' onClick={()=>{props.onSaleClick()}} >
      {props.mobile ?
        <Div margin='-2px 0'>
          <A>
            <img src={RedRibbon} style={{width:'25px',height:'25px',paddingLeft:'5px'}} alt='' />
            {
              props.saleName.title
            }
            <img src={RedRibbon} style={{width:'25px',height:'25px',paddingLeft:'5px'}} alt='' />

          </A>
        </Div>:
        <h3>

          <img src={RedRibbon} style={{width:'40px',height:'40px',paddingLeft:'5px'}} alt='' />
          <A>
            {
                props.saleName.title
            }
          </A>
          <img src={RedRibbon} style={{width:'40px',height:'40px',paddingLeft:'5px'}} alt='' />
        </h3>
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
