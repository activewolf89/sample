import styled,{css} from 'styled-components';
import FontAwesome from 'react-fontawesome';


export default styled(FontAwesome)`
  color: gray;
  :hover {
    color: ${props => props.theme.ThemedColor};
  }

  ${props => props.isHamburgerOpen && css`
    color: ${props => props.theme.ThemedColor};
`};
`;
