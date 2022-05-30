import React,{Component} from 'react';
import Div from 'shared/Div';
//shared

import SelectModal from 'shared/SelectModal';
import ShopButton2 from 'shared/ShopButton2';
import Banner0 from 'shared/Banner0';
// -----

class Banner extends Component{
  constructor(props){
    super(props)
    this.state = {
      whichSection: props.selectCategoryValue ? props.selectCategoryValue: 'engagement-rings',
      showSelect: false
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleShowSelect = this.handleShowSelect.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleCloseModal = function(section){
    this.setState({
      showSelect: false
    })
  }
  handleCategoryChange = function(section){
    var pushToString = '/' + section;
    if(section === 'mens-bands' || section === 'ladies-bands'){
      pushToString = 'wedding-bands?=' + section
    }
    if(section === 'earrings' || section === 'necklaces' || section === 'fine-rings' || section === 'watches' || section === 'other' || section === 'bracelets'){
      pushToString = 'fine-jewelry?=' + section
    }
    this.props.history.push(pushToString)
    this.setState({
      whichSection:section
    })
  }
  handleShowSelect = function(){
    this.setState({
      showSelect: this.state.select ? false: true
    })
  }
  componentDidUpdate(props){
    if(this.state.whichSection !== props.selectCategoryValue){
      this.setState({
        whichSection: props.selectCategoryValue
      })
    }
  }
  render(){
    return (
      <Div themed >
        <Banner0
          promoObject = {this.props.promoObject}
          selectCategoryValue = {this.props.selectCategoryValue}
          history={this.props.history}
        />
        <Div textAlign='center'>
          <ShopButton2
            selectCategoryValue = {this.props.selectCategoryValue}
          />
        </Div>

      </Div>
    )
  }
}

export default Banner;
