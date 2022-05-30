import React,{Component} from "react";

import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import Input from 'shared/Input';
import styled from 'styled-components';
import Title from 'shared/Title';
import LoadedListOfItems from './LoadedListOfItems';
const StyledInput = styled(Input)`
border: 0;
outline: 0;
color: white;
background: transparent;
width: 100%;
border-bottom: 1px solid white;
font-size: 30px;
::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;
}

:-ms-input-placeholder {
   text-align: center;
}
`

// -----





class SearchInput extends Component {
  constructor(props){
    super(props);


    this.state = {
      string: props.searchInput,
      test: ''
    }
    this.handleDelaySend = this.handleDelaySend.bind(this)
  }
  handleDelaySend = function(val){
    var timeout = null;
    clearTimeout(this.state.test);
    timeout = setTimeout(()=> {
       this.props.onSearchChange(this.state.string)
   }, 500);
   this.setState({
     string: val,
     test: timeout
   })
  }
  render(){
  return (
      <Div height="100%" margin="10px 0" display="flex" flexDirection="column"  flexWrap="nowrap">
        <StyledInput placeholder="Enter Keywords" onChange = {(e)=>{this.handleDelaySend(e.target.value)}} value={this.state.string}></StyledInput>
        <Div  height="80%" overflowY="auto" position="relative">
          <Title>
            {
              this.props.searchItemsFrom === '' || this.props.searchItemsFrom === 'none'  ? "start typing your search": this.props.searchItems.length === 0 && this.props.searchItemsFrom !== 'none' ? "none found, please refine search":
              this.props.searchItems.length + ' items found'
            }
          </Title>

          <LoadedListOfItems
            searchItems = {this.props.searchItems}
            searchItemsFrom = {this.props.searchItemsFrom}
            history = {this.props.history}
            onAddtoWishlist = {this.props.onAddToWishlist}
          />
        </Div>
      </Div>

  )
}
}
SearchInput.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  onAddToWishlist: PropTypes.func.isRequired

}
export default SearchInput;
