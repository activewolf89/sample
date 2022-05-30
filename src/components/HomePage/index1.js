import React,{Component} from 'react';
import Div from 'shared/Div';

import styled from 'styled-components';
import VideoMaster from 'containers/VideoMaster'
import FreshOptions from './FreshOptions';
import LineWithHighlight from './LineWithHighlight';
import Gallery from './Gallery';
import LazyLoad from 'react-lazyload';
import StyledIframe from 'shared/StyledIframe'
import lifestyle from 'images/CustomerImages/lifestyle.jpg'
import Banner from './Banner'
const StyledDiv =  styled(Div)`
  width: 100vw;
  height: 100vw;
  @media only screen and (min-width: 500px) {
    width: 500px;
    height: 500px;
  }
@media only screen and (min-width: 996px) {
  width: 400px;
  height: 400px;
}
@media only screen and (min-width: 1500px) {
  width: 600px;
  height: 600px;
}

`

const MasterGrid = styled(Div)`
  display: grid;
  grid-template-areas:
  "weAreBack weAreBack weAreBack weAreBack weAreBack weAreBack"
  "notSure notSure notSure notSure notSure notSure"
  "filler filler filler filler filler filler"
  "lookingFor lookingFor lookingFor lookingFor lookingFor lookingFor"
  "beautyShots beautyShots beautyShots beautyShots beautyShots beautyShots"
  "freshOptions freshOptions freshOptions freshOptions freshOptions freshOptions"
  "q q q q q q"
  "b b b c c c"
  "d d d e e e"
  "happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters"
  "reactGallery reactGallery reactGallery reactGallery reactGallery reactGallery"

  ;

  grid-template-rows: auto ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;


`
class HomePage extends Component {

  render(){
    return (
      <Div pr>
        <MasterGrid >
          <Div gridArea="weAreBack"  >
            <Banner
              onContactClick = {this.props.onContactClick}
            />

          </Div>

          <Div gridArea="freshOptions" >
            {
                this.props.secondaries &&

              <LazyLoad height={1000} once>
                <LineWithHighlight
                  name="Tacori Stackables"
                  smallWords = "Imagine a special occasion"
                />
                <FreshOptions
                  rotatingBannerArray={this.props.rotatingBannerArrayTac}
                  promoObject = {this.props.promoObject}
                  onGetRotatingBanner = {this.props.onGetRotatingBanner}
                />
              </LazyLoad>
            }
            {
                this.props.secondaries &&

              <LazyLoad height={1000} once>
                <LineWithHighlight
                  name="Fresh Arrivals"
                  smallWords = "Browse Our Latest Inventory"
                />
                <FreshOptions
                  rotatingBannerArray = {this.props.rotatingBannerArray}
                  promoObject = {this.props.promoObject}
                  onGetRotatingBanner = {this.props.onGetRotatingBanner}
                />
              </LazyLoad>
            }
          </Div>

          <Div gridArea="q">

            <LineWithHighlight
              name="Custom Made Bracelet"
              smallWords = "16.5cttw Asscher diamond bracelet created to customer's wants & our abilities"
            />
            <Div display='flex' justifyContent='center'   themedAccent>
              <Div padding='5px'>

                <StyledIframe
                  movieName={'AsscherBracelet'}
                  ItemKey={'AsscherBracelet'}
                >
                </StyledIframe>
              </Div>
              <Div padding='5px'>
                <StyledDiv >
                  <img src={lifestyle} style={{width:'100%',height:'100%'}} alt="lifestyle" />
                </StyledDiv>
              </Div>
            </Div>

          </Div>
          <Div gridArea="b" display='flex' justifyContent='space-between'  height='100%' >
            <Div />
            <VideoMaster
              name="Customer Education"
              desList={['Is our #1 priority','The time we are happy to commit to you']}

            />

          </Div>

          <Div  display='flex' justifyContent='space-between' gridArea="c" height='100%'>
            <VideoMaster
              name="Sustainable Practices"
              desList={[`Forevermark and natural diamonds`, 'Redesigning existing pieces']}

            />
            <Div />

          </Div>

          <Div gridArea="d" height='100%' display='flex' justifyContent='space-between' >
            <Div />
            <VideoMaster
              name="Quality Craftmanship"
              desList={['Our goldsmith','Our designers', 'Our selection standards']}

            />

          </Div>
          <Div gridArea="e" height='100%'  display='flex' justifyContent='space-between' >
            <VideoMaster
              name="Technology in Jewelry"
              desList={['The ways we create custom pieces','360 degree jewelry photography','Man-made diamonds in todays world']}

            />
            <Div />

          </Div>

          <Div themedAccent gridArea="reactGallery" >
            <Div gridArea="happilyEverAfters" >
              <LazyLoad height={1000} once>
                <LineWithHighlight
                  name="Happily Ever Afters"
                />
              </LazyLoad>
            </Div>
            <LazyLoad height={1000} once>
              <Gallery />
            </LazyLoad>
          </Div>

        </MasterGrid>
      </Div>

    )
  }
}


HomePage.propTypes = {

}
export default HomePage;
