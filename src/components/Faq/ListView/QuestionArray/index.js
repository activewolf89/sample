import Div from 'shared/Div';
import React, {Component} from "react";
import Ul from 'shared/Ul';
import Li from 'shared/Li';
class Class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: ''
    }
    this.handleOnOpen = this.handleOnOpen.bind(this)
  }
  handleOnOpen = function(name) {
    if (name === this.state.isOpen) {
      this.setState({isOpen: ''})
    } else {

      this.setState({isOpen: name})
    }

  }
  componentDidMount() {
    if (this.props.ArrayOfParameters.length > 0) {
      this.setState({isOpen: this.props.ArrayOfParameters[0]})
    }
  }
  render() {
    return (<Div>
      <Ul >
        {
          this.props.faqArray.map((obj, idx) => {
            return (<Li key={idx}>
              <Div cursor='pointer' fontWeight={this.state.isOpen === obj.id
                ? 'bold'
                : ''}  onClick={() => {
                  this.handleOnOpen(obj.id)
                }}>
                {obj.question}
              </Div>
              {
                obj.id === this.state.isOpen && <Div  padding='5px' themedAccent>
                    {obj.answer}
                  </Div>
              }
            </Li>)
          })
        }
      </Ul>
    </Div>)
  }
}

export default Class;
