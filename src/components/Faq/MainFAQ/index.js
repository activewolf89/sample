import React from 'react';
import Div from 'shared/Div';
import ArticleFAQ from './ArticleFAQ';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
import scrollToComponent from 'react-scroll-to-component';
// -----

class MainFAQ extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      testSearch: '',
      rootPathDifference:'',
      searchPath: '',
      referenceSpot: '',
      questionNumber:''

    }
    this.handleOnOpen = this.handleOnOpen.bind(this)
  }
  handleOnOpen = function(referenceSpot){
    if(referenceSpot && this.state.referenceSpot !== referenceSpot){
      if(!this.props.doNotScroll){
    scrollToComponent(this[referenceSpot], { offset: 120, align: 'middle', duration: 500})
  }
    this.setState({
      referenceSpot: referenceSpot
    })
  }
  }
  componentDidMount(){
    if(this.props.history && !this.props.questionToScrollTo){
    const {search,pathname} = this.props.history.location;
    var rootPathDifference = pathname.slice(this.props.rootPath.length,pathname.length)
    var searchPath = ''
    var questionNumber = ''
    if(search.includes('?=')){
     var searchPathArray = search.slice(2,search.length).split(',')
     searchPath = searchPathArray[0]
     if(searchPathArray.length === 2){
       questionNumber = searchPathArray[1]
     }
  }

    this.setState({
      rootPathDifference: rootPathDifference,
      searchPath: searchPath,
      questionNumber: questionNumber
    })
  }
  if(this.props.questionToScrollTo){
    this.setState({
      questionNumber: this.props.questionToScrollTo.question,
      searchPath: this.props.questionToScrollTo.topic,
    })
  }

  }
  UNSAFE_componentWillReceiveProps(props){
    if(this.props.history && !this.props.questionToScrollTo){
    const {search,pathname} = props.history.location;
    var rootPathDifference = pathname.slice(props.rootPath.length,pathname.length)
    var searchPath = ''
    var questionNumber = ''
    if(search.includes('?=')){
     var searchPathArray = search.slice(2,search.length).split(',')
     searchPath = searchPathArray[0]
     if(searchPathArray.length === 2){
       questionNumber = searchPathArray[1]
     }
  }

    this.setState({
      rootPathDifference: rootPathDifference,
      searchPath: searchPath,
      questionNumber: questionNumber,

    })
  }
  if(this.props.questionToScrollTo){
    this.setState({
      searchPath: this.props.questionToScrollTo.topic,
      questionNumber: this.props.questionToScrollTo.question
    })
  }
}
  render(){
    return (
    <Div  >
      {
        this.props.browse &&
        <Div margin="20px 0">
          <StyledLink to={this.props.to}  color="maroon">
            <Div display="flex" alignItems="center" fontStyle="italic">
              <FontAwesome name="caret-left" style={{marginRight:'5px'}} />
              Browse {this.props.catTitle}
            </Div>
          </StyledLink>
        </Div>
      }
      <NoMPUl childrenPadding="5px 0" >
        {this.props.questionArray && this.props.questionArray.map((question)=>{
          var test = question.id

          return (
            <Li
              ref={(section) => { this[test] = section; }}
              key={question.id}>
              <ArticleFAQ
                category = {this.props.category}
                open = {question.id === this.state.searchPath}
                searchPath = {this.state.searchPath}
                title={question.title}
                titleId = {question.id}
                options={question.options}
                onOpen={this.handleOnOpen}
                questionNumber = {this.state.questionNumber}
              />
            </Li>
          )
        })}
      </NoMPUl>
      <NoMPUl childrenPadding="5px 0" >
        {this.props.policyArray && this.props.policyArray.map((question)=>{
          var test = question.id
          return (
            <Li
              ref={(section) => { this[test] = section; }}
              key={question.id}>
              <ArticleFAQ
                category = {'policy'}
                open = {question.id === this.state.searchPath}
                searchPath = {this.state.searchPath}
                title={question.title}
                titleId = {question.id}
                options={question.options}
                onOpen={this.handleOnOpen}
              />
            </Li>
          )
        })}
      </NoMPUl>
    </Div>
    )
  }
}
export default MainFAQ;
