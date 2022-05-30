import styled,{css} from 'styled-components';
import {  prop } from 'styled-tools';


export default styled.h5`
  :hover {
    color: ${props => props.theme.ThemedColor};
    cursor: pointer;

  }
`;
