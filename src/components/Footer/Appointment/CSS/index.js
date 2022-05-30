import styled from 'styled-components';
import Div from 'shared/Div';
export const Circle = styled(Div)`
  width: 75px;
  height: 75px;
  border: 2px solid white;
  border-radius: 50%;
`
export const HalfDiv = styled(Div)`
width: 100%;
@media only screen and (min-width: 996px) {
  width: 50%;
};
`
export const ShapeSection = styled(Div)`
background: #222;
border-bottom: 2px solid #555;
border-top: 2px solid #555;
margin-top: 30px;
padding: 40px 0;
`
export const Diamond = styled(Div)`
display: none;

  opacity: .9;
height: 170px;
width:170px;
@media only screen and (min-width: 687px) {
  height: 200px;
  width:200px;
}
@media only screen and (min-width: 996px) {
  height: 250px;
  width:250px;
}
text-align: center;
transform:translate(-50%, -50%) rotate(45deg)  ;
position: absolute;
top: 50%;
left: 50%;
border: 1px solid white;
:hover{
  opacity: 1;
  background-color: teal;
  cursor: pointer;
}
`
export const LargerDiamond = styled(Div)`
  opacity: .9;
height: 220px;
text-align: center;
transform:translate(-50%, -50%) rotate(45deg)  ;
width:220px;
position: absolute;
top: 50%;
left: 50%;
border: 5px solid white;
:hover{
  opacity: 1;
  background-color: teal;
  cursor: pointer;
}
`
export const DiamondText = styled(Div)`
  display: flex;
  flex-wrap: nowrap;
  height:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
transform:translate(-50%, -50%)  rotate(-45deg);
`
export const BackgroundBanner = styled(Div)`
height: 400px;
@media only screen and (min-width: 996px) {
};
`
export const BackgroundBannerLarge = styled(Div)`

@media only screen and (min-width: 996px) {
  height: 400px;
};
`
