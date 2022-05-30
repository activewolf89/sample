import React,{Component} from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H'
//shared

import SelectModal from 'shared/SelectModal';
import ImSearchingFor from './ImSearchingFor';
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
    var options = [
      {destination:'/shop/engagement-rings',name:'Engagement Rings'},
      {destination:'/shop/loose-diamonds',name:'Diamonds'},
      {destination:'/shop/ladies-bands',name:'Ladies Bands'},
      {destination:'/shop/mens-bands',name:'Mens Bands'},
      {destination:'/shop/fine-jewelry',name:'Necklaces'},
      {destination:'/shop/fine-jewelry/earrings',name:'Earrings'},
      {destination:'/shop/fine-jewelry/fine-rings',name:'Fine Rings'},
      {destination:'/shop/fine-jewelry/bracelets',name:'Bracelets'},
      {destination:'/shop/fine-jewelry/watches',name:'Watches'},
      {destination:'/shop/fine-jewelry/other',name:'Other'},
      {destination:'/shop',name:'Show All'},
    ]
    return (
      <Div >
        {
          this.state.showSelect &&
          <SelectModal
            history = {this.props.history}
            selected={this.state.whichSection === "wedding-bands" ? "ladies-bands": this.state.whichSection === "fine-jewelry" ? 'earrings':
              this.state.whichSection === "our-services" ? "repairs":this.state.whichSection}
            onCategoryChange={this.handleCategoryChange}
            onCloseModal={this.handleCloseModal}
            title="L T Denny"
            options={options}
            selectCategoryValue = {this.props.selectCategoryValue}
          />
        }
        <H3 >
          <ImSearchingFor
            bumper = {this.props.bumper}
            onShowSelect = {this.handleShowSelect}
            selectCategoryValue = {this.props.selectCategoryValue}
          />
        </H3>
      </Div>
    )
  }
}

export default Banner;
