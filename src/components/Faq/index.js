import React,{Component} from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Header from './Header';
import ListView from './ListView';
import getParameterByName from 'containers/Shop/Helpers/getParameterByName';
// -----
import HeaderTitle from 'shared/HeaderTitle';
import P from 'shared/P';
import Button from 'shared/Button';
import styled from 'styled-components';
// -----

// -----
const StyledDiv = styled(Div)`
width: 100%;
max-width: 996px;
height: 100vh;
@media only screen and (min-width: 996px) {
width: 996px;
}
`
class Faq extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: '',
      ArrayOfParameters: []
    }
    this.handleOnOpen = this.handleOnOpen.bind(this)
  }
  componentDidMount(){
    const {search} = this.props.history.location;
    var ArrayOfParameters = getParameterByName('faq',search).split(',')
    this.setState({
      isOpen: ArrayOfParameters.length > 0 ? ArrayOfParameters[0]:'',
      ArrayOfParameters: ArrayOfParameters
    })
  }
  handleOnOpen = function(name){
    if(name === this.state.isOpen){
      this.setState({
        isOpen: ''
      })
    } else {

      this.setState({
        isOpen: name
      })
    }
  }
  render(){
  return (
    <StyledDiv  >
      <Div textAlign='center' maxWidth='996px'>
        <HeaderTitle
          title="FAQ Section"
        />
        {
          this.props.onContactClick &&
          <Div>

            <P fontStyle='italic'>
              This is a grouping of based off category of common questions and answers we have received.  If there is a question you may have that is not answered here you can email us
              or text us at <a href="tel:206-682-5555">206-682-5555</a>
            </P>
            <Button add onClick={()=>{this.props.onContactClick('email')}}>
              Email Us
            </Button>
          </Div>
        }
      </Div>
      <NoMPUl childrenBorderBottom='1px solid gray' childrenPadding='10px 0'>
        {
          this.props.knowledgeArray.sort((a,b)=>{
            const {clickTo} = a;
            var aPoints = 0;
            var bPoints = 0;
            if(this.props.history.location.pathname.includes(clickTo)){
              aPoints +=10
            } else {
              bPoints +=10

            }
            return  bPoints - aPoints;
          }).map((obj,idx)=>{
            return(
              <Li key={idx} >
                <Header
                  id ={obj.id}
                  name={obj.name}
                  onOnOpen={this.handleOnOpen}
                  isOpen = {this.state.isOpen}
                />
                {
                  this.state.isOpen === obj.id &&
                  <ListView
                    arrOfOptions = {obj.obj}
                    ArrayOfParameters = {this.state.ArrayOfParameters.slice(1,this.state.ArrayOfParameters.length)}
                  />
                }
              </Li>
            )
          })
        }

      </NoMPUl>

    </StyledDiv>
  )
}

}
Faq.propTypes = {
}
export default Faq;
