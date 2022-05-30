import styled,{css} from 'styled-components';
import { prop} from 'styled-tools';


export default styled.span`
  font-weight: ${prop('fontWeight','')};
  font-family: ${prop('fontFamily','')};
  font-style: ${prop('fontStyle','')};
  font-size: ${prop('fontSize','')};
  margin: ${prop('margin','')};
  padding: ${prop('padding','')};
  display: ${prop('display','')};
  text-align: ${prop('textAlign','')};
  line-height: ${prop('lineHeight','')};
  background-color: ${prop('backgroundColor','')};
  text-decoration: ${prop('textDecoration','')};
  color: ${prop('color','')};
  cursor: ${prop('cursor','')};
  white-space: ${prop('whiteSpace','')};
  ${props => props.error && css`
    border: 1px solid red;
  `}
  ${props => props.underline && css`
    text-decoration: underline;
  `}
  ${props => props.clickable && css`
    cursor: pointer;
  `}
`;
