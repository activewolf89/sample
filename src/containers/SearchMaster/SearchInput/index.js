import React,{Component} from "react";

import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
//shared
import Button from 'shared/Button';
import FloatFont from 'shared/FloatFont';
import FontAwesomeHeader from 'shared/FontAwesomeHeader';
class SearchInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      string: props.searchInput ? props.searchInput:"",
      isOn: false
    }
    this.handleDelaySend = this.handleDelaySend.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.textInput = React.createRef();
    this.handleOn = this.handleOn.bind(this)
  }
  handleOn = function(){
    this.setState({
      isOn: !this.state.isOn
    })
  }
  handleDelaySend = function(val){

   this.setState({
     string: val,
   })
  }
  handleSubmit = function(string,e){
    this.textInput.current.focus();

    e.preventDefault()
    if(string && string.length > 0){

    string = string.split(' ').join('+')
    this.props.history.push('/shop?search=' + string)
  }
  }
  handleReset = function(string,e){
    e.preventDefault()
    this.textInput.current.focus();
this.props.history.push(this.props.history.location.pathname)
this.setState({
  string: ''
})
}

  render(){
  return (
        <form onSubmit={(e)=>{this.handleSubmit(this.state.string,e)}}>
          <Div display='flex' >

            <Div width='100vw' maxWidth='800px'>
              <input    ref={this.textInput} style={{ width:'100%', height:'60px'}} autoFocus={true} placeholder="Search Our Inventory" onChange = {(e)=>{this.handleDelaySend(e.target.value)}} value={this.state.string}></input>
            </Div>
            <Div  cursor='pointer'  display='flex' onClick={(e)=>{this.handleOn()}} flexDirection='column' alignItems='center'  color='white'>
              <Button >
                Enter
              </Button>
            </Div>
          </Div>
          
        </form>
  )
}
}

export default SearchInput;
