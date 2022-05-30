import styled,{css} from 'styled-components';
import { prop } from 'styled-tools';
export default styled.button`
  background-color: ${prop('backgroundColor','')};
  color: ${prop('color','')};
  font-family: ${prop('fontFamily')};
  width: ${prop('width','auto')};
  height: ${prop('height','auto')};
  margin: ${prop('margin','')};
  padding: ${prop('padding','10px')};
  opacity: ${prop('padding','.9')};
  box-shadow: ${prop('boxShadow','')};
  border: ${prop('border','')};
  width: ${prop('width','')};
  max-width: ${prop('maxWidth','')};
  height: ${prop('height','')};
  border-radius: ${prop('borderRadius','')};
  font-size: ${prop('fontSize','')};
  opacity: ${prop('opacity','')};
  cursor: pointer;

  ${props => props.remove && css`
    padding: 10px;
    background-color: maroon;
    color: white;
    border-color: ${props => props.theme.LightColor};
    border-width: 2px;
    border-style: solid;

  `};
  ${props => props.add && css`
    padding: 10px;
    background-color: green;
    color: white;
    border-color: ${props => props.theme.LightColor};
    border-width: 2px;
    border-style: solid;

  `};
  ${props => props.nonClickable && css`
    cursor: auto;
  `};
  ${props => props.grayedOut && css`
    opacity: .4;
  `};
  ${props => props.halfDome && css`
    border-radius:50% 50% 0 0;
  `};
  ${props => props.shop && css`
    opacity: .8;
    width: 40%;
    padding: 10px;
    margin: 10px;
    color:white;
    border-radius: 5px;
    background-color: teal;
    :hover {
      border: 2px solid yellow;

      opacity: 1;
    }

  `}
  ${ props => props.circle && css `
    border-radius: 10px;
    padding: 10px;
  `}
  ${props => props.activeWhite && css`
    background-color: white;
    color: black;

  `}
  ${props => props.themedNoBorder && css`
    padding: 10px;
    background-color: ${props => props.theme.DarkColor};
    border-color: ${props => props.theme.LightColor};
    border-width: 0;
    border-style: solid;
    border: 0px solid white;
    :hover{
      color: ${props => props.theme.ThemedColor};
    }
  `};
  ${props => props.themedAccentNoBorder && css`
    padding: 10px;
    background-color: ${props => props.theme.Accent};
    border-color: ${props => props.theme.LightColor};
    border-width: 0;
    border-style: solid;
    border: 0px solid white;
      color: ${props => props.theme.ThemedColor};
  `};
  ${props => props.themed && css`
    padding: 10px;
    background-color: ${props => props.theme.DarkColor};
    background-color:  ${prop('backgroundColor','')};
    color: ${props => props.theme.AccentColor};
    border-color: ${props => props.theme.LightColor};
    border-width: 2px;
    border-style: solid;

  `};
  ${props => props.themedIfOpacity && css`
    padding: 10px;
    background-color: ${props => props.theme.DarkColor};
    color: white;
    border-color: ${props => props.theme.LightColor};
    border-width: 2px;
    border-style: solid;

  `};
  ${props => props.lightThemed && css`

    padding: 10px;
    color: ${props => props.theme.DarkColor};
    background-color: ${props => props.theme.ThemedColor};
    font-weight:bold;
    border-width: 2px;
    border-style: solid;

  `};
  ${props => props.active && css`
    padding: 10px;
    background-color: ${props => props.theme.ThemedColor};

    color: ${props => props.theme.ThemedFontColor};
    border-color: ${props => props.theme.LightColor};
    border-width: 2px;
    border-style: solid;
    :hover {
      color: ${props => props.theme.ThemedFontColor};
    }

  `}
`
