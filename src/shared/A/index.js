import styled,{css} from 'styled-components';
import {  prop } from 'styled-tools';
import Span from 'shared/Span';

export default styled(Span)`
  height: ${prop('height','')};
  width: ${prop('width','')};
  font-size: ${prop('fontSize','')};
  color:${prop('color','')};
  font-weight: ${prop('fontWeight','')};
  cursor:pointer;
  display: inline-block;
   text-decoration: none;
   :after {
    content: '';
    display: block;
    width: 0;
    height: 4px;
    background: ${prop('color','white')};
    transition: width .3s;
}
  :hover {
    ${props => !props.active && css`
      :after {
        width: 100%;
      }
    `}
text-shadow: 1px 0 0 currentColor;
  }
  ${props => props.active && css`
    text-decoration: underline;
    font-weight: bold;

  `}

`;
