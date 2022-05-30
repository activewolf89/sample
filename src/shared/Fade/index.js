import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import { CSSTransition,Transition } from 'react-transition-group';
require('../header.css');

//shared
const duration = 300;

const defaultStyle = {
transition: `opacity ${duration}ms ease-in-out`,
opacity: 0,
padding: 20,
display: 'inline-block',
backgroundColor: '#8787d8'
}
const transitionStyles = {
entering: { opacity: 0,
  transition: `opacity 3000ms ease-in-out`,
  opacity: 1,

},
entered: {
   opacity: .4,
   transition: `opacity 3000ms ease-in-out`,

 },
};
// -----
const Fade = ({ in: inProp }) => {

  return (

  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div key="2" style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm A fade Transition!
      </div>
    )}
  </Transition>
)
}
Fade.propTypes = {
}
export default Fade;
//----------
