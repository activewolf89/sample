import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import {H2} from 'shared/H';
import Button from 'shared/Button';
import A from 'shared/A';
import P from 'shared/P';
import HoursTab from '../Shared/HoursTab';
import styled from 'styled-components';
// -----

// -----
const StyledDiv = styled(Div)`
width: 100vw;
max-width: 996px;
height: 100vh;
@media only screen and (min-width: 996px) {
width: 996px;
}
`
class DirectionsTab extends React.Component {
  constructor() {
    super();
    this.state = {
      isMapOpen: false
    }
    this.handleToggleMap = this.handleToggleMap.bind(this);
  }
  handleToggleMap(){
    this.setState({
      isMapOpen: !this.state.isMapOpen
    })
  }

  render() {
  return (
    <StyledDiv >

      <Div height="400px">
        <iframe title="store location" src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyDx4Ko-IVWDDVAyjWkBm8zFMkZUA-jkEC8&q=ltdenny,Seattle+WA"} style={{width:'100%',height:'100%'}} />
      </Div>
      <Div display="flex" justifyContent="space-between">
        <H2>Address: {" "}
          <A nonA href="http://maps.google.com/?q=515 Occidental Ave S, Washington, Seattle, 98104" target="_blank">515 occidental ave south, Seattle WA 98104</A>
        </H2>
      </Div>
      <Div>
        <HoursTab
          dropdown={true}
          noCaret={true}
        />
      </Div>
      <Div>
        <P>
          Note: Appointments are not required, however it is encouraged.  We will check any traffic in our area, and make sure to schedule a time that can provide our undivided attention.
        </P>
      </Div>
      <Div margin="10px 0 0 0" padding='0 0 150px 0'>
        <Button   width="100%" onClick={()=>{this.props.onToggleDetail('appointment')}}>
          Schedule Appointment
        </Button>
      </Div>
    </StyledDiv>
  )
}
}
DirectionsTab.propTypes = {
  onToggleDetail: PropTypes.func.isRequired
}
export default DirectionsTab;
