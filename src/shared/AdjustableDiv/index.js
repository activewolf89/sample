import styled,{css} from 'styled-components';
import Div from 'shared/Div'

export default styled(Div)`
${props => props.mobileOnly && css`
  display: block;
  @media only screen and (min-width: 996px) {
    display: none;
  }
  }
`}
${props => props.desktopOnly && css`
  display: none;
  @media only screen and (min-width: 996px) {
    display: block;
  }
`}
`
