import React,{Component} from "react";

import Div from 'shared/Div';
import styled from 'styled-components';
//shared
import whiteCase from 'images/WhiteColorShot.jpg';
import yellowCase from 'images/YellowColorShot.jpg';
import roseCase from 'images/RedColorShot.jpg';
import Case from './Case';
import RotatingMasterBanner from 'components/RotatingMasterBanner';
import MathEquation from 'shared/MathEquation'
import ScheduleAndAppointmentScreen from './ScheduleAndAppointmentScreen'
import AppointmentMap from './AppointmentMap';
import HomeBanner from 'images/TKimages/webp/main2Opt.webp';
import LazyLoad from 'react-lazyload';
import Skeleton,{ SkeletonTheme }  from 'react-loading-skeleton';
const StyledDiv = styled(Div)`
height: 300px;

  @media only screen and (min-width: 996px) {
  height: 800px;
  }
`


class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      white: false,
      yellow: false,
      rose: false,
      loadVideo: false
    }
    this.handleFlip = this.handleFlip.bind(this)
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loadVideo: true
      })
    },1000)

  }
  handleFlip = function(color){
    if(color === 'rose'){
      if(this.state.rose){
        //turn off
        this.setState({
          yellow: false,
          rose: false,
          white: false
        })
      } else {
        this.setState({
          yellow: false,
          rose: true,
          white: false
        })
      }
    }
    if(color === 'yellow'){

      if(this.state.yellow){
        //turn off
        this.setState({
          yellow: false,
          rose: false,
          white: false
        })
      } else {
        this.setState({
          yellow: true,
          rose: false,
          white: false
        })
      }
    }
    if(color === 'white'){
      if(this.state.white){
        //turn off
        this.setState({
          yellow: false,
          rose: false,
          white: false
        })
      } else {
        this.setState({
          yellow: false,
          rose: false,
          white: true
        })
      }
    }



  }
  render(){
    return (
      <SkeletonTheme >

        <Div >
          <Div gridArea='backgroundShot'>

            {
              this.state.loadVideo ?
                <Div >
                  {
                    this.props.categoryObjects.featuredObjects ?
                      <MathEquation
                        FeaturedItems = {this.props.categoryObjects.featuredObjects[this.props.selectCategoryValue] ? this.props.categoryObjects.featuredObjects[this.props.selectCategoryValue].items:[]}
                        backTwo={false}
                      />:
                      <Skeleton
                        height={800}
                        count={1}

                      />
                  }
                </Div>:
                <Div height='100vh' width='100vw' maxWidth='100%'>

                </Div>
            }
          </Div>
          <Div gridArea='zero'>
            {/* <Div>
              <RotatingMasterBanner
                rotatingBannerArray = {this.props.rotatingBannerArray}
                promoObject = {this.props.promoObject}
                onGetRotatingBanner = {this.props.onGetRotatingBanner}
                fromCategory = {140}
                getUnique = "Homepage.featured"
              />
            </Div> */}
          </Div>

          <Div gridArea='background' >
            <ScheduleAndAppointmentScreen
              onContactClick={this.props.onContactClick}
            />

            <AppointmentMap
              onContactClick={this.props.onContactClick}
            />
            <StyledDiv backgroundSize="contain" backgroundPosition='center' backgroundRepeat='no-repeat' backgroundImg={HomeBanner} themed>
            </StyledDiv>
          </Div>
        </Div>
      </SkeletonTheme>

      )
  }
}

export default Class;
// -----
