import styled from 'styled-components';
import { prop } from 'styled-tools';

export default styled.div`
  text-align: ${prop('textAlign','')};
  margin: ${prop('margin','0px')};
  padding: 0px;
  font-size: ${prop('fontSize','')};
  text-decoration: ${prop('textDecoration','')};
  color: ${prop('color','')};
  background-color: ${prop('backgroundColor','')};
  font-weight: bold;
  color: red;
`
