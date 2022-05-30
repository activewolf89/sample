import React,{Component} from 'react';
import Div from 'shared/Div';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import ModalContainer from './ModalContainer'
import P from 'shared/P'
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
      whichModal: 'wireframe',
      showEdit: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleToggle = function(value){
    this.setState({
      showModal: !this.state.showModal,
      whichModal: value
    })
  }
  handleEdit = function(value){
    this.setState({
      showEdit:true
    })

  }

  render(){
    return (
      <Div >
      {
      this.state.showModal &&
      <ModalContainer handleEdit = {this.handleEdit} showEdit = {this.state.showEdit} whichModal = {this.state.whichModal} handleClose={this.handleToggle} />
    }
    <Div display='flex' flexDirection='column' alignItems='center' flexDirection='column' padding='20px 0'>
    <Div>Welcome, <span style={{fontWeight:'bold'}}>Reedd2@uw.edu </span> to your backend portal</Div>
    <P>Track your past events, who is going to the event, and their survey results on how the event went.</P>
    </Div>

      <Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>Event Name</th>
    <th>Event Date</th>
    <th>Details</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Vibrant Tops</td>
    <td style={{color:'green', fontWeight:'bold'}}>07/11/2022</td>
    <td onClick={()=>{this.handleToggle('vibrant_tops')}}><span style={{color:'blue',cursor:'pointer'}}>Link</span></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Business Casual</td>
    <td style={{color:'maroon', textDecoration:'line-through'}}>03/02/2022</td>
    <td onClick={()=>{this.handleToggle('business_casual')}}><span style={{color:'blue',cursor:'pointer'}}>Link</span></td>
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
