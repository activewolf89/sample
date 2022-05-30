import React from 'react';
import Div from 'shared/Div';
import Helmet from 'shared/Helmet'
import styled from 'styled-components';
import Banner from '../Shared/Banner'
import LazyLoad from 'react-lazyload';
import ContactNow from '../Shared/ContactNow'
import CollectionsPage from '../Shared/CollectionsPage';
//-----------------------------
import MobileSlider0 from 'images/Tacori/mobile2.jpg'
import MobileSlider1 from 'images/Tacori/mobile1.jpg'
import MobileSlider2 from 'images/Tacori/Slider2.jpg'
import DeskSlider0 from 'images/Tacori/SliderGround0.jpg'
import DeskSlider1 from 'images/Tacori/Slider1.jpg'
import DeskSlider2 from 'images/Tacori/newSlider2.jpg'
//------------------------------
import RotatingImages from '../Shared/RotatingImages';
import History from '../Shared/History'
import TV from '../Shared/TV';
import {TacoriCollections} from '../Shared/Collections'
import LineWithHighlight from 'shared/LineWithHighlight'
import Gallery from '../Shared/Gallery'
import zero from 'images/Tacori/BottomPics/zero.jpg'
import one from 'images/Tacori/BottomPics/one.jpg'
import two from 'images/Tacori/BottomPics/two.jpg'
import three from 'images/Tacori/BottomPics/three.jpg'
import four from 'images/Tacori/BottomPics/four.jpg'
import five from 'images/Tacori/BottomPics/five.jpg'
import six from 'images/Tacori/BottomPics/six.jpg'
import seven from 'images/Tacori/BottomPics/seven.jpg'
import eight from 'images/Tacori/BottomPics/eight.jpg'
import nine from 'images/Tacori/BottomPics/nine.jpg'
import ten from 'images/Tacori/BottomPics/ten.jpg'
import eleven from 'images/Tacori/BottomPics/eleven.jpg'
import twelve from 'images/Tacori/BottomPics/twelve.jpg'
import thirteen from 'images/Tacori/BottomPics/fourteen.jpg'


const MasterGrid = styled(Div)`
  display: grid;
  padding: 0 5px;
  grid-template-areas:
  "banner banner banner banner banner banner"
  "ContactNow ContactNow ContactNow ContactNow ContactNow ContactNow"
  "rotatingImages rotatingImages rotatingImages rotatingImages rotatingImages rotatingImages"
  "collections collections collections collections collections collections"
  "history history history history history history"
  "gallery gallery gallery gallery gallery gallery"
  ;
  width:100vw;
  max-width:2000px;
  grid-row-gap: 50px;
  grid-template-rows: auto ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  @media only screen and (min-width: 996px) {
    display: grid;
    grid-template-areas:
    "banner banner banner banner banner banner"
    ". ContactNow ContactNow ContactNow ContactNow ."
    "rotatingImages rotatingImages rotatingImages rotatingImages rotatingImages rotatingImages"
    ". collections collections collections collections ."
    ". history history history history ."
    ". gallery gallery gallery gallery ."
    ;
    width:100vw;
    max-width:2000px;
    grid-row-gap: 50px;
    grid-template-rows: auto ;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

`


// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      <Helmet
        title =  "Tacori Engagement rings, Fine Jewelry, Earrings, Pendants, and Bracelets"
        name = "Tacori Engagement rings, Fine Jewelry, Earrings, Pendants, and Bracelets"
        href =  {`www.ltdenny.com/tacori`}
        content={`Tacori is a family-owned Californian designer that we have had the pleasure to work with for the past 30 years.
          We have had the longest connection with Tacori, and are proud to offer a large selection of platinum, yellow and rose-gold live settings in-store.
        `}
      />
      <MasterGrid >
        <Div gridArea="banner" themed="Tacori" backgroundColor='black'>
          <Banner
            themedButton="Tacori"
            rotating
            destinationObj={[
              {img:DeskSlider0,mobileImage:MobileSlider0, linkObj:{title:'Shop Engagement Rings',link:'shop/bridal/engagement-rings?ItemVendorName=Tacori'},header:"TACORI Engagement Rings",description:"Each piece is hand-made in Glendale, California with beauty at every angle in mind."},
              {img:DeskSlider1,mobileImage:MobileSlider1,linkObj:{title:'Shop Wedding Bands',link:'shop/wedding-bands?ItemVendorName=Tacori'},header:"TACORI Wedding Bands",description:"The wedding band is made perfectly to match the engagement ring, with matching men's bands"},
              {img:DeskSlider2,mobileImage:MobileSlider2,linkObj:{title:'Shop Fine Jewelry',link:'shop/fine-jewelry?ItemVendorName=Tacori'},header:"TACORI Fine Jewelry",description:"Tacori has their finger on the pulse of fashion, view now!"}
            ]}
          />
        </Div>
        <Div gridArea="ContactNow" >
          <ContactNow
            text={"Call/Text Now to Speak with a Tacori Specialist"}
            bluePaint
          />
        </Div>
        <LazyLoad height={1000} once>
          <Div  gridArea='rotatingImages'>
            <RotatingImages
              rotatingBannerArray = {props.rotatingBannerArray}
              promoObject = {props.promoObject}
              onGetRotatingBanner = {props.onGetRotatingBanner}
              fromDesigner = 'Tacori'
              getUnique = "Homepage.featured"
            />
          </Div>
        </LazyLoad>
        <LazyLoad height={1000} once>

          <Div gridArea='collections' >
            <CollectionsPage
              arrayOfCollections = {TacoriCollections}
            />
          </Div>
        </LazyLoad>

      </MasterGrid>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
