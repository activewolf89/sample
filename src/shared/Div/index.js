import styled,{css} from 'styled-components';
import { prop} from 'styled-tools';

export default styled.div`
  order: ${prop('order','')};
  cursor: ${prop('cursor','')};
  column-count: ${prop('columnCount','')};
  background: ${prop('background','')};
  font-size: ${prop('fontSize','16px')};
  font-style: ${prop('fontStyle','')};
  @media only screen and (min-width: 996px) {
    font-size: 26px;
  }
  transition: ${prop('transition','')};
  font-weight: ${prop('fontWeight','')};
  display: ${prop('display','')};
  justify-content: ${prop('justifyContent','')};
  align-items: ${prop('alignItems','')};
  position: ${prop('position','')};
  width: ${prop('width','')};
  direction: ${prop('direction','')};
  min-width: ${prop('minWidth','')};
  columns: ${prop('columns','')}
  min-height: ${prop('minHeight','')};
  height: ${prop('height','')};
  max-height: ${prop('maxHeight','')};
  max-width: ${prop('maxWidth','')};
  border: ${prop('border','')};
  float: ${prop('float','')};
  transform: ${prop('transform','')};
  clear: ${prop('clear','')};
  border-bottom: ${prop('borderBottom','')};
  border-top: ${prop('borderTop','')};
  border-left: ${prop('borderLeft','')};
  border-right: ${prop('borderRight','')};
  border-radius: ${prop('borderRadius','')};
  bottom: ${prop('bottom','')};
  left: ${prop('left','')};
  right: ${prop('right','')};
  top: ${prop('top','')};
  overflow: ${prop('overflow','')};
  overflow-x: ${prop('overflowX','')};
  overflow-y: ${prop('overflowY','')};
  opacity: ${prop('opacity','')};
  z-index: ${prop('zIndex','')};
  box-shadow: ${prop('boxShadow','')};
  background-color: ${prop('backgroundColor','')};
  background-repeat: ${prop('backgroundRepeat','')};
  background-size: ${prop('backgroundSize','')};
  background-position: ${prop('backgroundPosition','')};
  background-attachment: ${prop('backgroundAttachment','')};
  background-image: ${(prop) => prop.backgroundImg ? `url(${prop.backgroundImg})`:''};
  color: ${prop('color','')};
  margin: ${prop('margin','')};
  margin-left: ${prop('marginLeft','')};
  padding: ${prop('padding','')};
  border-bottom: ${prop('bottomBorder','')};
  text-align: ${prop('textAlign','')};
  line-height: ${prop('lineHeight','')};
  vertical-align: ${prop('verticalAlign','')};
  flex-direction: ${prop('flexDirection','row')};
  flex-wrap: ${prop('flexWrap','wrap')};
  flex-flow: ${prop('flexFlow','')};
  justify-content: ${prop('justifyContent','flex-start')};
  align-items: ${prop('alignItems','flex-start')};
  grid-column-start: ${prop('columnStart','')};
  grid-column-end: ${prop('columnEnd','')};
  grid-row-start: ${prop('rowStart','')};
  grid-row-end: ${prop('rowEnd','')};
  grid-area: ${prop('gridArea','')};
  grid-column: ${prop('gridColumn','')};
  grid-row: ${prop('gridRow','')};
  text-decoration: ${prop('textDecoration','')};
  text-overflow: ${prop('textOverflow','')};
  white-space: ${prop('whiteSpace','')};
  ${props => props.bordered && css`
    border-bottom: 4px solid white;

  `};
  ${props => props.borderArmoire && css`
    border: 5px solid indigo;
    border-color: ${props => props.theme.Armoire};


  `};
  ${props => props.Armoire && css`
    background-color: ${props => props.theme.Armoire};
    color: white;

  `};
  ${props => props.underline && css`
    text-decoration: underline;

  `}
  ${ props => props.themedBottom && css`
    border-bottom: 2px solid ${props => props.theme.DarkColor};

  `}


  ${ props => props.Tacori && css`
    background-color: ${props => props.theme.Tacori};
    color: white;

  `}
  ${ props => props.TacoriWriting && css`
    color: ${props => props.theme.Tacori};

  `}

  ${props => props.pr && css`
    background-color: orange;
    border: 2px solid red;

  `}
  ${props => props.rp && css`
    background-color: gray;
    border: 2px solid red;

  `}
  ${props => props.grayedOut && css`
    opacity: .6;

  `}

  ${props => props.capitalize && css`
    text-transform: uppercase;
  `};
  ${props => props.borderThemed && css`
    border: 1px solid ${props => props.theme.DarkColor};
    border-radius: 10px;

  `};
  ${props => props.rightSelected && css`
    font-weight: bold;
    border-right: 5px solid ${props => props.theme.DarkColor};

  `}
  ${props => props.bottomSelected && css`
    font-weight: bold;
    border-bottom: 5px solid ${props => props.theme.DarkColor};

  `}
  ${props => props.slightBottomShadow && css`
  box-shadow:0px 1px 1px black
  `}
  ${props => props.slightBoxShadow && css`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `}
  ${props => props.rb && css`
    background-color: green;
    border: 2px solid white;

  `}

  ${props => props.hoverable && css`
    :hover {
      cursor: pointer;
      color: ${props => props.theme.ThemedColor};

    }
  `}
  ${props => props.hoverableBlue && css`
    :hover {
      cursor: pointer;
      color: blue;

    }
  `}
  ${props => props.hoverableLight && css`
    :hover {
      text-decoration: underline;
      cursor: pointer;
      color: ${props => props.theme.DarkColor};

    }
  `}
  ${props => props.hoverablySelected && css`
      cursor: pointer;
      font-weight: bold;
      background-color: ${props => props.theme.ThemedColor};
  `}
  ${props => props.themedLightBackground && css`
    color: ${props => props.theme.DarkColor};
    background-color: ${props => props.theme.ThemedColor};
  `}
  ${props => props.flexCenter && css`
    display: flex;
    justify-content: center;
  `}
  ${props => props.selected && css`
    border: 3px solid black;
  `}
  ${props => props.hoverableBackground && css`
    :hover {
      cursor: pointer;
      color: ${props => props.theme.ThemedFontColor};

    }
  `}
  ${props => props.error && css`
    border: 2px solid red;
  `}
  ${props => props.themed && css`
    background-color: ${props => props.theme.DarkColor};
    color: ${props => props.theme.ThemedFontColor};
    font-family: ${props => props.theme.ThemedFont};
  `};
  ${props => props.themedBorderLight && css`
    background-color: ${props => props.theme.DarkColor};
    color: white;
    font-family: ${props => props.theme.ThemedFont};
    border-bottom: 2px solid ${props => props.theme.ThemedColor};

  `};
  ${props => props.themedLight && css`
    background-color: ${props => props.theme.ThemedColor};
    color: white;
    font-family: ${props => props.theme.ThemedFont};

  `};

  ${props => props.themedBorder && css`
    border-color: ${props => props.theme.ThemedColor};
    background-color:white;
    border-width: 3px;
    border-style: solid;
  `};
  ${props => props.active && css`
    color: black;
    background-color: ${props => props.theme.LightColor};
  `};
  ${props => props.bold && css`
    font-weight: bold;
  `};
  ${props => props.highlighted && css`
    display: inline-block;

      font-style: normal;
      border-radius: 1em 0 1em 0;
      text-shadow: 1px 1px 1px #fff;
      background-image:
        linear-gradient(-100deg,
          rgba(255,250,150,0.15),
          rgba(255,250,150,0.8) 100%,
          rgba(255,250,150,0.25)
        );

      font-weight: 600;
      line-height: 1.35;
      margin: 0 auto;
      max-width: 720px;


  `}
  ${props => props.themedAccent && css`
    background-color: ${props => props.theme.Accent};
    color: ${props => props.theme.AccentColor};
    font-family: ${props => props.theme.ThemedFont};
  `};
`
