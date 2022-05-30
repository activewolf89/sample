import React,{Component} from "react";
import {H2} from 'shared/H';


class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      word: props.word ,
      currentWord: '',
      index: 0
    }
    this.alertFunc = this.alertFunc.bind(this)
  }
  componentWillUnmount(){
    clearInterval(this.timeout)

  }
  componentDidMount(){
    this.timeout = setInterval(this.alertFunc, 100)
  }
  UNSAFE_componentWillReceiveProps(props){
    var restructuredWord = props.word
    if(this.state.word !== restructuredWord){
      this.setState({
        index: 0,
        word: restructuredWord,
        currentWord:''
      })
      this.timeout = setInterval(this.alertFunc, 100)
    }
  }
  alertFunc = function(){
    if(this.state.word !== this.state.currentWord){
      var arrayOfLetters = this.state.currentWord.split('')
      arrayOfLetters[this.state.index] = this.state.word[this.state.index];

      this.setState({
        currentWord: arrayOfLetters.join(''),
        index: this.state.index + 1,
      })
    } else {
      clearInterval(this.timeout)
    }
  }
  render(){
    return (
      <H2 >
        {this.state.currentWord}
      </H2>
    )
  }
}


Class.propTypes = {
}
export default Class;
