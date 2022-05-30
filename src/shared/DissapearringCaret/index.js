import styled,{css} from 'styled-components';
import FontAwesome from 'react-fontawesome';

export default styled(FontAwesome)`
display: block;
@media only screen and (min-width: 996px) {
  display: none;
  ${props => props.exception && css`
    display: block;

    `};
}
`
