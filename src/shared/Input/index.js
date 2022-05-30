import styled,{css} from 'styled-components';
import { prop} from 'styled-tools';
const INPUT = styled.input`

  width: ${prop('width','')};
  height: ${prop('height','')};
  border-radius: ${prop('borderRadius','')};
  border: ${prop('border','')};
  ${props => props.error && css`
    border: 1px solid red;
  `}
  ${props => props.readOnlyColor && css`
    background-color: gray;

  `}
  ${props => props.standard && css`
    :active{
      border-color: ${props => props.theme.LightColor};
    };
    width: 100%;
    border: 1px solid gray;
  `};
`;

export default INPUT;
