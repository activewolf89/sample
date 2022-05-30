import styled from 'styled-components';
import Div from 'shared/Div';

export default styled(Div)`
  .sideNavigation{
    width: 20%;
    display: none;
    background-color: black;
  }
@media only screen and (min-width: 996px) {
  .sideNavigation{
    display: block;
  }
}
`
