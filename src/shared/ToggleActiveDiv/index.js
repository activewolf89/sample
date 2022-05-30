import styled,{css} from 'styled-components';
import {  prop } from 'styled-tools';
import Div from 'shared/Div';


export default styled(Div)`
  width: ${prop('width','100%')};
  overflow: hidden;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  transition: all .3s ease-in;
  z-index: 4;
  position: absolute;
  height: 0px;
  left: 0;
  right: 0;
  color: black;
  background-color: white;
  ul {
    margin: 0 15px;
  }
  ${props => props.open && css`
    height: auto;

`};

`;
