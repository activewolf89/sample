import styled from 'styled-components';
import Div from 'shared/Div';

export default styled(Div)`
display: grid;
grid-template-columns: repeat(8,1fr);
grid-column-gap: 10px;
grid-row-gap: 5px;
grid-template-rows: auto;
grid-template-areas:
" firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne"
" rotatingBanner rotatingBanner rotatingBanner rotatingBanner rotatingBanner rotatingBanner rotatingBanner rotatingBanner "
" secondOne secondOne secondOne secondOne secondTwo secondTwo secondTwo secondTwo"
" thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne "
" thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo "
" four four four four four four four four ";

@media only screen and (min-width: 996px) {

  grid-template-areas:
  " firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne"
  " . rotatingBanner rotatingBanner rotatingBanner rotatingBanner rotatingBanner rotatingBanner . "
  " . secondOne secondOne secondOne secondTwo secondTwo secondTwo ."
  " . thirdOne thirdOne thirdOne thirdOne thirdOne thirdOne . "
  " . thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo thirdTwo . "
  " . four four four four four four . "
}

`
