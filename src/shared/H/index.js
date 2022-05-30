import styled,{css} from 'styled-components';
import { prop } from 'styled-tools';

export const H1 =  styled.h1`
font-size: ${prop('fontSize','')};
${props => props.textAlign && css`
  text-align: center;
`};
${props => props.capitalize && css`
  text-transform: uppercase;
`};
`;
export const H2 =  styled.h2`
  white-space: ${prop('whiteSpace','')};
${props => props.textAlign && css`
  text-align: center;
`};
font-size: ${prop('fontSize','')};
font-style: ${prop('fontStyle','')};

${props => props.underline && css`
  text-decoration: underline;
  font-style: italic;
  cursor: pointer;
`};
${props => props.capitalize && css`
  text-transform: uppercase;
`};
`;
export const H3 =  styled.h3`
white-space: ${prop('whiteSpace','')};

text-align: ${prop('textAlign','')};
font-weight: ${prop('fontWeight','')};
${props => props.underline && css`
  text-decoration: underline;
  font-style: italic;
  cursor: pointer;
`};
${props => props.capitalize && css`
  text-transform: uppercase;
`};
`;

export const H4 =  styled.h4`
white-space: ${prop('whiteSpace','')};

${props => props.textAlign && css`
  text-align: center;
`};
font-style: ${prop('fontStyle','')};
${props => props.underline && css`
  text-decoration: underline;
  font-style: italic;
  cursor: pointer;
`};
${props => props.capitalize && css`
  text-transform: uppercase;
`};
`;
export const H5 = styled.h5`

@media only screen and (min-width: 1500px) {
  font-size: ${prop('fontSize','')};

}
font-style: ${prop('fontStyle','')};

${props => props.bold && css`
  font-weight: bold;
`};
${props => props.strike && css`
  text-decoration: line-through;
`};
${props => props.capitalize && css`
  text-transform: uppercase;
`};
${props => props.noBold && css`
  font-size: 16px;
`};
${ props => props.noMargin && css`
  padding: 0px;
  margin: 0px;
`}
`;
