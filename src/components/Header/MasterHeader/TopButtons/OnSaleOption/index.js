import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Div from 'shared/Div';
import Bumper from 'containers/Bumper';
// -----
const ReachOption = (props) =>{

  return (
    <CSSTransition
      in={props.isOnSaleToggle}
      timeout={400}
      classNames="shopTheToggle"
    unmountOnExit>
      <Div themed width='100vw' >
        <Bumper
          mobile
          path="events"
        />
      </Div>
      </CSSTransition>
  )
}
ReachOption.propTypes = {
}
export default ReachOption;
