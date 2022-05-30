import styled,{css} from 'styled-components';
import Div from 'shared/Div';
export default styled(Div)`
${props => props.highlighted && css`
  border: 1px solid green;
  `}
`;
