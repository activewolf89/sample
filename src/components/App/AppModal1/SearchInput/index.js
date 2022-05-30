import React,{Component} from "react";

import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import Input from 'shared/Input';
import styled from 'styled-components';
import Title from 'shared/Title';
import LoadedListOfItems from './LoadedListOfItems';
import CantFind from './CantFind';
const StyledInput = styled(Input)`
border: 0;
outline: 0;
background: transparent;
width: 100%;
border-bottom: 1px solid black;
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

const StyledDiv = styled(Div)`
max-width: 996px;
height: 100vh;
@media only screen and (min-width: 996px) {
width: 996px;
}
`



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
      <StyledDiv  width='100%' height="100%"  margin="10px 0" display="flex" flexDirection="column"  flexWrap="nowrap" themed>
        <StyledInput placeholder="Enter Keywords" onChange = {(e)=>{this.handleDelaySend(e.target.value)}} value={this.state.string}></StyledInput>
        <Div  height="80%" overflowY="auto" position="relative" width='100%'>
          <Title >
            {
              this.props.searchItemsFrom === '' || this.props.searchItemsFrom === 'none'  ? "start typing your search": this.props.searchItems.length === 0 && this.props.searchItemsFrom !== 'none' ? "none found, please refine search":
              this.props.searchItems.length + ' items found'
            }
          </Title>
          <Div textAlign='center'>
            <CantFind
              onContactClick = {this.props.onContactClick}
            />
          </Div>
          <LoadedListOfItems
            onContactClick = {this.props.onContactClick}
            searchItems = {this.props.searchItems}
            searchItemsFrom = {this.props.searchItemsFrom}
            history = {this.props.history}
            onAddtoWishlist = {this.props.onAddToWishlist}
          />
        </Div>
      </StyledDiv>

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
