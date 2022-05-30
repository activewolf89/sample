import styled from 'styled-components';
import {  prop } from 'styled-tools';

export default styled.span`
  cursor:pointer;
  color:${prop('color','maroon')};
  font-size:${prop('fontSize','maroon')};

  text-decoration: underline;
  :hover {
    font-weight: bold;
  }
`;
