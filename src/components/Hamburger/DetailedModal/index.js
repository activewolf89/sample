import React from 'react';
import Div from 'shared/Div';
import Designer from './Branches/Designer';
import Bridal from './Branches/Bridal';
import Diamonds from './Branches/Diamonds';
import LadiesBands from './Branches/LadiesBands';
import GentsBands from './Branches/GentsBands';
import Necklaces from './Branches/Necklaces';
import Earrings from './Branches/Earrings';
import Bracelets from './Branches/Bracelets';
import FineRings from './Branches/FineRings';
import Misc from './Branches/Misc';
// -----
const funcC0mp = (props) =>{
  return (
    <Div width='100vw' maxWidth='500px' >
      {props.isDetailHamburgerOpen === "designers" ?

        <Designer
          designerObject = {props.designerObject}
          travelTo = {props.travelTo}
          history={props.history}
        />
      :props.isDetailHamburgerOpen === "engagement_rings" ?
        <Bridal
        />
      :props.isDetailHamburgerOpen === "loose_diamonds" ?
        <Diamonds
        />
      :props.isDetailHamburgerOpen === "ladies_bands" ?
        <LadiesBands/>
      :props.isDetailHamburgerOpen === "gents_bands" ?
        <GentsBands/>
      :props.isDetailHamburgerOpen === "necklaces" ?
        <Necklaces />
      :props.isDetailHamburgerOpen === "earrings" ?
        <Earrings
        />
      :props.isDetailHamburgerOpen === "bracelets" ?
        <Bracelets
        />
      :props.isDetailHamburgerOpen === "fine_rings" ?
        <FineRings
        />
      :
      <Misc
      />
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
