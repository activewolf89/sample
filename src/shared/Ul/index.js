import styled,{css} from 'styled-components';
import { prop } from 'styled-tools';

export default styled.ul`
  max-width: ${prop('maxWidth','')};
  order: ${prop('order','')};
  columns: ${prop('columns','')};
  column-count: ${prop('columnCount','')};
  height: ${prop('height','')};
  max-height: ${prop('maxHeight','')};
  font-size: ${prop('fontSize','')};
  list-style-type: ${prop('listStyle','')};
  padding: ${prop('padding','')};
  margin: ${prop('margin','')};
  border: ${prop('border','')};
  flex-flow: ${prop('flexFlow','')};
  flex-wrap: ${prop('flexWrap','')};
  list-style-position: ${prop('listStylePosition','')};
  flex-direction: ${prop('flexDirection','')};
  display: ${prop('display','')};
  justify-content: ${prop('justifyContent','')};
  align-items: ${prop('alignItems','')};
  width: ${prop('width','')};
  margin-top: ${prop('marginTop','')};
  background-color: ${prop('backgroundColor','')};
  border-right: ${prop('borderRight','')};
  border-top: ${prop('borderTop','')};
  border-left: ${prop('borderleft','')};
  border-bottom: ${prop('borderBottom','')};
  overflow: ${prop('overflow','')};
  ${props => props.clickable && css`
    >li{
      cursor: pointer;
    }
  `};
  ${props => props.childrenMargin && css`
    >li{
      margin: ${prop('childrenMargin','')};
    }
  `};
  ${props => props.childrenPadding && css`
    >li{
      padding: ${prop('childrenPadding','')};
    }
  `};

  ${props => props.childrenFontSize && css`
    >li{
      font-size: ${prop('childrenFontSize','')};
    }
  `};
  ${props => props.childrenBorderBottom && css`
    >li:not(:last-child) {
      border-bottom: ${prop('childrenBorderBottom','')};
    }

  `};
  ${props => props.childrenBorderRadius && css`
    >li {
      border-radius: ${prop('childrenBorderRadius','')};
    }
  `};
  ${props => props.childrenBorder && css`
    >li {
      border: ${prop('childrenBorder','')};
    }
  `};
  ${props => props.childrenBorderRight && css`
    >li:not(:last-child) {
      border-right: ${prop('childrenBorderRight','')};
    }
  `};
  ${props => props.themedBottomBorder && css`
    border-bottom: ${props => props.theme.ThemedColor};


  `};

`;
