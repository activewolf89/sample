import React,{Component} from 'react';
import Div from 'shared/Div';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import Banner from './New/Banner'
import Column from './New/Column'
import lightbox from 'images/lightbox.jpg'
import calendar from 'images/calendar.jpg'
import GiftCard from 'images/2020Christmas/GiftCard.jpg'
import gift from 'images/2020Christmas/gift.jpg'
import studs from 'images/2020Christmas/studs.jpg'
import RotatingVideo from './New/RotatingVideo';
import LongImage from './New/LongImage';
import background from 'images/Tacori/background.jpg'
import LazyLoad from 'react-lazyload';
import BannerDesk from 'images/LTD_BANNER.png'
import BannerMobile from 'images/MobileLTD.png'
import Styled from 'styled-components';
import EngRings from 'images/2020Christmas/EngagementRings.jpg'
import LadiesBands from 'images/ladiesBands.jpg'
import GentsBands from 'images/bands.webp'
import Necklace from 'images/2020Christmas/Necklace.jpg'
import Earrings from 'images/2020Christmas/Earrings.jpg'
import FineRings from 'images/2020Christmas/fineRings.jpg'
import longWeddingBands from 'images/2020Christmas/backgroundImg.jpg'
import Sale from 'images/2020Christmas/Sale.jpg'
import Sale2 from 'images/2020Christmas/Sale2.jpg'
import Sale3 from 'images/2020Christmas/Sale3.jpg'
import OnSale from './New/OnSale';
const StyledRow = styled(Row)`
padding: 0 0 30px 0;

  @media only screen and (min-width: 996px) {
    padding: 0 0 60px 0;

  }
`
class HomePage extends Component {

  render(){
    return (
      <Div padding='10px 0 0 0'>

        <Container fluid>
          <StyledRow >
          <StyledRow >
            <Col xs={12}>
              <Banner  WebImage={[BannerMobile,BannerDesk]}  buttonObj={{url:"/shop/bridal/engagement-rings?ItemVendorName=Tacori", text:"Shop Tacori Bridal"}} />
            </Col>

          </StyledRow>
          <StyledRow>
            <Col xs={12} md={6}>
              <Column img={lightbox} buttonObj={{url:'/shop?StoneLab=LabGrown', name:'Shop Lab Grown'}} ribbonColor="Blue" left ribbonText="New" />
            </Col>
            <Col xs={12} md={6}>
              <Column img={studs} buttonObj={{url:'/shop/fine-jewelry/earring?ItemDetail_7=Stud', name:'Shop Diamond Studs'}} ribbonColor="orange" ribbonText="Classics" />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col>
              <RotatingVideo  buttonObj={{url:'/shop?ItemVendorName=Gumuchian', name:'Honey-B Collection'}} movieName="P479DY" />
            </Col>
          </StyledRow>
          <StyledRow>
            <Col xs={6} md={4}>
              <Column height='200px' img={GiftCard} buttonObj={{url:'/contact-us/email', name:'Purchase Gift Cards'}}  noButton  ribbonText="Gift Cards" ribbonColor="blue" right />
            </Col>
            <Col xs={6} md={4}>
              <Column height='200px' img={calendar} buttonObj={{url:'/contact-us/appointment', name:'Schedule Consultation'}} noButton  ribbonText="Schedule" ribbonColor="blue" right />

            </Col>
            <Col xs={12} md={4}>
              <Column height='200px' img={gift} buttonObj={{url:'/shop?ItemInventoryType=M', name:'Limited Time'}}  ribbonText="Limited-Time" noButton ribbonColor="blue"  />
            </Col>
          </StyledRow>
          <StyledRow>
            <LongImage backgroundImg={background} />
          </StyledRow>
          <LazyLoad height={1000} once>
            <StyledRow >
              <Col>
                <Banner text={"Engagement Rings"} WebImage={[EngRings,EngRings]} buttonObj={{url:"/shop/engagement-rings", text:"Get Engaged Here"}}  />
              </Col>
            </StyledRow>
            <StyledRow>
              <Col xs={12} md={6}>
                <Column img={LadiesBands} buttonObj={{url:'/shop/wedding-bands/ladies-bands', name:'Ladies Bands'}} />
              </Col>
              <Col xs={12} md={6}>
                <Column img={GentsBands} buttonObj={{url:'/shop/wedding-bands/gents-bands', name:'Gents Bands'}} />
              </Col>
            </StyledRow>
            <StyledRow>
              <Col>
                <RotatingVideo  buttonObj={{url:'/shop/bracelets', name:'Bracelets'}} movieName="B8182W" />
              </Col>
            </StyledRow>
            <StyledRow>
              <Col xs={12} md={4}>
                <Column height='200px' img={Necklace} buttonObj={{url:'/shop/necklaces', name:'Necklaces'}}    />
              </Col>
              <Col xs={12} md={4}>
                <Column height='200px' img={Earrings} buttonObj={{url:'/shop/earrings', name:'Earrings'}}   right />

              </Col>
              <Col xs={12} md={4}>
                <Column height='200px' img={FineRings} buttonObj={{url:'/shop/fine-rings', name:'Fine Rings'}}     />

              </Col>
            </StyledRow>
            <StyledRow>
              <LongImage backgroundImg={longWeddingBands} />
            </StyledRow>
          </LazyLoad>

        </Container>
      </Div>

    )
  }
}


HomePage.propTypes = {

}
export default HomePage;
