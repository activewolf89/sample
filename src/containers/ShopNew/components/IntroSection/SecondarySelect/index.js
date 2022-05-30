import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import bracelet from 'images/SVG/bracelet.svg';
import cufflinks from 'images/SVG/cufflinks.svg';
import diamond from 'images/SVG/diamond.svg';
import earring from 'images/SVG/earring.svg';
import necklace from 'images/SVG/necklace.svg';
import watch from 'images/SVG/watch.svg';
import lBand1 from 'images/SVG/lBand1.svg';
import mensBand1 from 'images/SVG/mensBand1.svg';
import engRing from 'images/SVG/engRing.svg';

import Options from './Options';
// -----
const funcC0mp = (props) =>{
  return (
    <Div backgroundColor='lightGray'>
      {(props.history.location.pathname.includes('engagement-rings') || props.history.location.pathname.includes('loose-stones') ) ?
        <Div>
          <Options
            history={props.history}
            optionArray = {[
              {backgroundImg:engRing,link:'/engagement-rings',name:"Rings"},
              {backgroundImg:diamond,link:'/loose-diamonds',name:"Diamonds"}
            ]}
          />
        </Div>:
        (props.history.location.pathname.includes('wedding-bands')) ?
          <Div>
            <Options
              history={props.history}
              optionArray = {[{backgroundImg:mensBand1,link:'/shop/wedding-bands/mens-bands',name:"Mens"},
                {backgroundImg:lBand1, link:'/shop/wedding-bands/ladies-bands',name:"Ladies"}]}
            />
          </Div>:
          <Div >
            <Options
              history={props.history}
              optionArray = {
                [
                
                {backgroundImg:necklace,link:'/shop/fine-jewelry/necklace',name:"Necklaces"},
                {backgroundImg:earring,link:'/shop/fine-jewelry/earring',name:"Earrings"},
                {backgroundImg:bracelet,link:'/shop/fine-jewelry/bracelet',name:"Bracelets"},
                {backgroundImg:mensBand1,link:'/shop/fine-jewelry/fine-ring',name:"Rings"},
                {backgroundImg:watch,link:'/shop/fine-jewelry/watch',name:"Watches"},
                {backgroundImg:cufflinks,link:'/shop/fine-jewelry/other',name:"Other"},
                ]
              }
            />
          </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
