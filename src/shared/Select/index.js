import styled,{css} from 'styled-components';
import { prop} from 'styled-tools';



export default styled.select`
color: ${prop('color','')};
font-family: ${prop('fontFamily','')};
font-style: ${prop('fontStyle','')};
font-size: ${prop('fontSize','')};
margin: ${prop('margin','')};
padding: ${prop('padding','')};
display: ${prop('display','')};
text-align: ${prop('textAlign','center')};
line-height: ${prop('lineHeight','')};
background-color: ${prop('backgroundColor','')};
text-overflow: ${prop('textOverflow','')};
width: ${prop('width','')};
max-width: ${prop('maxWidth','')};
text-align: center;
  text-align-last: center;
${props => props.themed && css`
  background-color: ${props => props.theme.ThemedColor};
  color: ${props => props.theme.ThemedFontColor};
  font-family: ${props => props.theme.ThemedFont};
`};
${props => props.centered && css`
  display: flex;
  justify-content: center;
`};
`
