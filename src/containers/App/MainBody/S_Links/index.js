import React,{Component} from 'react';
import Div from 'shared/Div';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import ModalContainer from './ModalContainer'

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
class Template extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      whichModal: 'wireframe'
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle = function(value){
    this.setState({
      showModal: !this.state.showModal,
      whichModal: value
    })
  }

  render(){
    return (
      <Div >
      {
      this.state.showModal &&
      <ModalContainer whichModal = {this.state.whichModal} handleClose={this.handleToggle} />
    }
      <Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>Description</th>
    <th>Link</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>0</td>
    <td>Event Email Confirmation</td>
    <td onClick={()=>{this.handleToggle('event_email')}}><span style={{color:'blue',cursor:'pointer'}}>Snapshot</span></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Recipient Email Example</td>
    <td onClick={()=>{this.handleToggle('recipient_email')}}><span style={{color:'blue',cursor:'pointer'}}>Snapshot</span></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Preliminary Survey</td>
    <td><a href='https://docs.google.com/forms/d/1wijEtM95RY9cu2ucam_KK3XsT644ao1Ix9_l1AU6wX0/edit?ts=629275f1#responses' target="_blank">Link</a></td>
  </tr>
  <tr>
  <td>3</td>
    <td>Wireframe</td>
    <td onClick={()=>{this.handleToggle('wireframe')}}><span style={{color:'blue',cursor:'pointer'}}>Snapshot</span></td>
  </tr>
  <tr>
  <td>4</td>
    <td>StoryBoard</td>
    <td><a href='https://uwnetid-my.sharepoint.com/:f:/r/personal/janstan_uw_edu/Documents/Armoire/Armoire%20Style%20Project%20-%20Purple%20Team%201?csf=1&web=1&e=5Ra6fv' target="_blank">Presentation Slides</a></td>
  </tr>

</tbody>
</Table>
      </Div>

    )
  }
}


Template.propTypes = {

}
export default Template;
