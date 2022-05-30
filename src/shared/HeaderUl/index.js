import styled,{css} from 'styled-components';
import {  prop } from 'styled-tools';
import NoMPUl from 'shared/NoMPUl';

export const HeaderUlTwo = styled(NoMPUl)`
-moz-column-count: 3;
-moz-column-gap: 20px;
-webkit-column-count: 3;
-webkit-column-gap: 20px;
column-count: 3;
column-gap: 20px;
`;
export const HeaderUlOne = styled(NoMPUl)`

font-size: 20px;
columns: 100px 1;

`;
