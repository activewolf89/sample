import styled from 'styled-components';
import NoMPUl from 'shared/NoMPUl'

export default styled(NoMPUl)`
width: 100%;
display: block;
> li {
  padding: 10px;
  border-bottom: 1px solid gray;
}
@media only screen and (min-width: 996px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > li {
    padding: 10px;
    border-bottom: 0px solid gray;
  }

}
`
