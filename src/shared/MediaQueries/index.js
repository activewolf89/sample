import styled from 'styled-components';
import Div from 'shared/Div';

export const Desktop = styled(Div)`
  display: block;
@media only screen and (max-width: 995px) {
  display: none;
}
`;
export const Mobile = styled(Div)`
display: block;
@media only screen and (min-width: 996px) {
  display: none;
}
`;
