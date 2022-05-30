import React,{Component} from "react";

import Div from 'shared/Div';
import EducationNavigation from './EducationNavigation';
import EducationNavigationDetail1 from './EducationNavigationDetail1';

import EducationBody from './EducationBody';

// -----
class DetailedKnowledgePage extends Component{
  constructor(props){
    super(props)
    this.state = {
      load: false,
      pathname: this.props.history.location.pathname
    }
  }
  UNSAFE_componentWillReceiveProps(props){
    if(this.state.pathname !== props.history.location.pathname){
      this.setState({
        loading: true,
        pathname: props.history.location.pathname
      },()=>{
        this.setState({
          loading: false
        })
      })
    }
  }
  render(){
    return (
      <Div  >
        <Div  >
          <Div >
            <EducationNavigation
              history={this.props.history}
              knowledgeArray={this.props.knowledgeArray}
            />
          </Div>
          <Div  >
            <EducationNavigationDetail1
              history={this.props.history}
              knowledgeArray={this.props.knowledgeArray}
            />
          </Div>
          <Div >

            {
              this.state.loading ?
                <Div>
                  Loading...
                </Div>:
                <EducationBody
                  googleReviewObject = {this.props.googleReviewObject}
                  yelpReviewObject = {this.props.yelpReviewObject}
                  categoryObjects = {this.props.categoryObjects}
                  knowledgeArray={this.props.knowledgeArray}
                  history={this.props.history}
                  onFaqClick = {this.props.onFaqClick}
                />
            }
          </Div>
        </Div>
      </Div>
  )
}
}
DetailedKnowledgePage.propTypes = {
}
export default DetailedKnowledgePage;
