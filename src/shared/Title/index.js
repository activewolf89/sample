import styled,{css} from 'styled-components';
import { prop } from 'styled-tools';

export default styled.h5`
  height: ${prop('height','')};
  font-weight: ${prop('fontWeight','bold')};
  text-align: ${prop('textAlign','center')};
  margin: ${prop('margin','0px')};
  padding: 0px;
  @media only screen and (min-width: 996px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1300px) {
    font-size: 26px;
  }
  font-size: ${prop('fontSize','')};
  text-decoration: ${prop('textDecoration','')};
  color: ${prop('color','')};
  background-color: ${prop('backgroundColor','')};
  font-style: ${prop('fontStyle','')};
  text-decoration: none;
  white-space: ${prop('whiteSpace','wrap')};

  ${props => props.bold && css`
    font-weight: bold;
  `};
  ${props => !props.bold && css`
    font-weight: normal;
  `};
  ${props => props.capitalize && css`
    text-transform: uppercase;
  `};
  ${props => props.noCenter && css`
    text-align:left;
  `};
  ${props => props.underline && css`
    text-decoration: underline;
  `};
  ${props => props.navigationStyle && css`
    text-transform: uppercase;
  `}
  ${props => props.pageTitle && css`
    text-transform: uppercase;
  `}
`
