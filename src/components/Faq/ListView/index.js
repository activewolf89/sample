import React,{Component} from 'react';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import QuestionArray from './QuestionArray';
// -----

class ListView extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: ''
    }
    this.handleOnOpen = this.handleOnOpen.bind(this)
  }
  componentDidMount(){
    if(this.props.ArrayOfParameters.length > 0){
      this.setState({
        isOpen: this.props.ArrayOfParameters[0]
      })
    }
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
      <Div >
        <Ul>

          {
            this.props.arrOfOptions.map((obj,idx)=>{
              return(
                <Li key={idx}>
                  <Div  fontWeight={this.state.isOpen === obj.id ? 'bold':''} cursor='pointer'>

                    <Div onClick={()=>{this.handleOnOpen(obj.id)}}>
                      {obj.title}
                    </Div>
                  </Div>
                  {
                    this.state.isOpen === obj.id &&
                    <Div>
                      <QuestionArray
                        faqArray = {obj.faqArray}
                        ArrayOfParameters = {this.props.ArrayOfParameters.slice(1,this.props.ArrayOfParameters.length)}
                      />
                    </Div>
                  }
                </Li>
              )
            })
          }
        </Ul>
      </Div>
    )
}

}
ListView.propTypes = {
}
export default ListView;
