import React from 'react';
import Div from 'shared/Div';
import { CSSTransition } from 'react-transition-group';
// import Filters from 'containers/Bumper/Show/Shop'
import Bumper from 'containers/Bumper';
// -----
const funcC0mp = (props) =>{
  return (
    <Div>
      <CSSTransition
        in={props.wishListObject.open}
        timeout={400}
        classNames="shopTheToggle"
      unmountOnExit>
        <Div  width='100vw' backgroundColor='white'>
          <Bumper
            mobile
          />
        </Div>
      </CSSTransition>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
