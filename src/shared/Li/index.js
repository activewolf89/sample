import styled,{css} from 'styled-components';
import { prop } from 'styled-tools';

export default styled.li`
  order:${prop('order','')};
  color:${prop('color','')};
  width: ${prop('width','')};
  max-width: ${prop('maxWidth','')};
  height: ${prop('height','')};
  padding: ${prop('padding','')};
  margin: ${prop('margin','')};
  font-style: ${prop('fontStyle','')};
  background-color: ${prop('backgroundColor','')};
  flex-flow: ${prop('flexFlow','')};
  flex-grow: ${prop('flexGrow','')};
  border-bottom: ${prop('borderBottom','')};
  display: ${prop('display','')};
  justify-content: ${prop('justifyContent','')};
  align-items: ${prop('alignItems','')};
  border-radius: ${prop('borderRadius','')};
  position: ${prop('position','')};
  ${props => props.selected && css`
      border: 1px solid pink;
  `};
  ${props => props.clickable && css`
    :hover {

    cursor:pointer;
    font-weight: bold;
  }
  `};
  ${props => props.childrenMargin && css`
    >div{
      margin: ${prop('childrenMargin','')};
    }
  `};
  ${props => props.childrenPadding && css`
    >div{
      padding: ${prop('childrenPadding','')};
    }
  `};
  ${props => props.small && css`
    display: none;
    @media only screen and (max-width: 996px) {
      display: block;
}
  `};
  ${props => props.large && css`
    display: block;
    @media only screen and (max-width: 996px) {
      display: none;
    }
  `};

`;
