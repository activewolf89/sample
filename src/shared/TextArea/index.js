import styled,{css} from 'styled-components';
import { prop} from 'styled-tools';
const INPUT = styled.textarea`
  min-height: 100px;
  border-radius: ${prop('borderRadius','')};
  max-width: ${prop('maxWidth','')};
  width: ${prop('width','100%')};
  height: ${prop('height','100%')};
  border: ${prop('border','')};
  ${props => props.error && css`
    border: 1px solid red;
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
