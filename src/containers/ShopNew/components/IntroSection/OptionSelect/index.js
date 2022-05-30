import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Box from './Box';
import completeRing from 'images/SVG/completeRing.svg';
import completeFine from 'images/SVG/completeFine.svg';
import completeBand from 'images/SVG/completeBand1.svg';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl display='flex' justifyContent='center' childrenPadding='0 3px'>
        <Li onClick={()=>{props.history.push('/shop/engagement-rings')}}>
          <Box
            active={(props.history.location.pathname.includes('engagement-rings') || props.history.location.pathname.includes('loose-diamonds')) ? true:false  }
            backgroundImg={completeRing}
            name="Bridal"
            secondaryOptions = {["Engagement Rings","Loose Diamonds"]}
          />
        </Li>
        <Li onClick={()=>{props.history.push('/shop/wedding-bands')}}>
          <Box
            active={props.history.location.pathname.includes('wedding-bands') ? true: false }
            name="Wedding"
            backgroundImg={completeBand}
            secondaryOptions = {[{name:"Mens Bands",link:'/shop/wedding-bands/mens-bands/'},{name:"Ladies Bands",link:'/shop/wedding-bands/ladies-bands/'}]}

          />
        </Li>
        <Li onClick={()=>{props.history.push('/shop/fine-jewelry')}}>
          <Box
            active={(props.history.location.pathname.includes('fine-jewelry') || props.history.location.pathname.includes('loose-diamonds') ) ? true: false}
            backgroundImg={completeFine}
            name="Jewelry"
            secondaryOptions = {[
              {name:"Necklaces",link:'/shop/fine-jewelry/necklace'},
              {name:"Earrings",link:'/shop/fine-jewelry/earrings'},
              {name:"Rings Rings",link:'/shop/fine-jewelry/fine-ring'},
              {name:"Bracelets",link:'/shop/fine-jewelry/bracelet'},
              {name:"Watches",link:'/shop/fine-jewelry/watch'},
              {name:"Other",link:'/shop/fine-jewelry/other'},

            ]}
          />
        </Li>
      </NoMPUl>
      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
