import styled from 'styled-components';
import {  prop } from 'styled-tools';

export default styled.h3`
  cursor:pointer;
  color: maroon;
  text-decoration: underline;
  font-size: ${prop('fontSize','')};
  :hover {
    font-weight: bold;
  }
`;
