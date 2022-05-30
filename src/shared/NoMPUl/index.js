import styled from 'styled-components';
import { prop} from 'styled-tools';
import Ul from 'shared/Ul';
export default styled(Ul)`
margin: ${prop('margin',0)};
padding: ${prop('padding',0)};
list-style: none;
  >li:not(:last-child){
    border-bottom: ${prop('borderBottom','')};

  }
   :last-child {
    border-bottom: 0px solid red;
  }
`
