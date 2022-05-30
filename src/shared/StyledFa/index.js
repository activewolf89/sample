import styled,{css} from 'styled-components';
import FontAwesome from 'react-fontawesome';


export default styled(FontAwesome)`
  color: white;
  :hover {
    color: red;
  }
  ${props => props.selected && css`
    color: red;
  `}
`
