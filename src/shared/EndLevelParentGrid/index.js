import Div from 'shared/Div';
import styled,{css} from 'styled-components';

export default styled(Div)`
display: grid;
grid-template-columns: repeat(8,1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
grid-template-rows: auto;
grid-template-areas:
"MainPage MainPage MainPage MainPage MainPage MainPage MainPage MainPage"
" description1 description1 description1 description1 description1 description1 description1 description1"
"image1 image1 image1 image1 image1 image1 image1 image1"
" description2 description2 description2 description2 description2 description2 description2 description2"
"image2 image2 image2 image2 image2 image2 image2 image2"
" description3 description3 description3 description3 description3 description3 description3 description3"
"image3 image3 image3 image3 image3 image3 image3 image3"
" description4 description4 description4 description4 description4 description4 description4 description4"
"image4 image4 image4 image4 image4 image4 image4 image4"

;

@media only screen and (min-width: 996px) {

  grid-template-areas:
  "MainPage MainPage MainPage MainPage MainPage MainPage MainPage MainPage"
  " . image1 image1 image1 description1 description1 description1 ."
  " . image2 image2 image2 description2 description2 description2 ."
  " . image3 image3 image3 description3 description3 description3 ."
  " . image4 image4 image4 description4 description4 description4 ."
  ;
  ${props => props.justDescription && css`
    grid-template-areas:
    "MainPage MainPage MainPage MainPage MainPage MainPage MainPage MainPage"
    " . description1 description1 description1 description1 description1 description1 ."
    " . description2 description2 description2 description2 description2 description2 ."
    " description3 description3 description3 description3 description3 description3 description3 description3"
    " description4 description4 description4 description4 description4 description4 description4 description4"
    ;
  `}
}

`
