import React,{Component} from "react";

import Div from 'shared/Div';

import CheckHistory from './CheckHistory';
import CategoryBody from './CategoryBody'
import CheckHistoryLink from 'containers/Bumper/Helpers/CheckHistoryLink';
// -----
var ConnectValueWithLink = function(value,options,search){
  var linkToSend = '/shop'
  options.forEach((option)=>{
    if(option.name === value){
      linkToSend = option.link
    }
  })

  return linkToSend + search
}

  class Class extends Component{
    constructor(props){
      super(props);

      this.handleTheChange = this.handleTheChange.bind(this)
    }
          handleTheChange = function(value,options){
            this.setState({
              isOpen:CheckHistoryLink(ConnectValueWithLink(value,options))
            })

          }
          render(){
            return (
              <Div   >

                <Div>
                  <CategoryBody
                    selectCategoryValue = {this.props.selectCategoryValue}
                    promoObject = {this.props.promoObject}
                    onTheChange = {this.props.onTheChange}
                    CheckHistory = {CheckHistory}
                    options = {this.props.options}
                    CheckHistoryLink = {CheckHistoryLink}
                    ConnectValueWithLink = {ConnectValueWithLink}
                    ratio = {this.props.ratio}
                    onToggleSearchByItem = {this.props.onToggleSearchByItem}
                    onLoadItemNumbers = {this.props.onLoadItemNumbers}
                    isSearchItemKey = {this.props.isSearchItemKey}
                    itemKeys ={this.props.itemKeys}
                    onToggleDetail = {this.props.onToggleDetail}
                    history = {this.props.history}
                    searchableCategoryObject = {this.props.searchableCategoryObject}
                    categoryObjects = {this.props.categoryObjects}
                    isOpen = {this.props.isOpen}

                  />
                </Div>
              </Div>
  )
}

}
Class.propTypes = {
}


export default Class;
