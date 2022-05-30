import styled from 'styled-components';
import watercolor from 'images/SVG/watercolor.webp'
import Span from 'shared/Span';
export default styled(Span)`
  background: url(${watercolor});
  cursor:pointer;
  color: white;
  padding: 0 20px;
  font-weight: bold;
background-size: 140% 140%;
`
