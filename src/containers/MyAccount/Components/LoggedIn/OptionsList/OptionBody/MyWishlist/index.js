import React,{Component} from "react";
import Div from 'shared/Div';
import ReactTable from "react-table";
import OrganizeData from './OrganizeData';
import StyledLink from 'shared/StyledLink';
import ImageGallery from 'components/ItemDetails/ImageGallery';
import NoWishlist from './NoWishlist';
import MyShoppingLinks from '../MyShoppingLinks';
import {H3} from 'shared/H'
import A from 'shared/A'
import 'react-table/react-table.css'
import styled from 'styled-components';

const StyledImg = styled.img`
width: 100px;
height: 100px;
@media only screen and (min-width: 667px) {
width: 200px;
height: 200px;
}
  @media only screen and (min-width: 996px) {
  width: 300px;
  height: 300px;
  }
`


const columns = [{
  Header: 'Image Link',
  accessor: 'imageLink',
  Cell: (props) =>{
    return (
      <Div  >
        <StyledImg src={props.value.img} alt='wishlist item' />
      </Div>
    )
  }

},
{
  Header:"Item Link",
  accessor:"itemLink",
  Cell: (props) =>{
    if(props.value.link){
    return (
      <StyledLink  colored to={props.value.link}>
        <A  color='maroon' active>
          {props.value.itemNumber}
        </A>
    </StyledLink>
    )
  } else {
    return (
      <Div>
        {props.value.itemNumber}
      </Div>
    )
  }
  }
},

{
  Header: 'Added On',
  accessor: 'addedOnDate',
},
]

class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentRowSelected:0
    }
    this.handleChangeRow = this.handleChangeRow.bind(this);
  }
  handleChangeRow = function(index){
    this.setState({
      currentRowSelected:index
    })
  }
  render(){
    var item = (this.props.edgeWishlist && this.props.edgeWishlist.length !== 0) ? this.props.edgeWishlist[this.state.currentRowSelected]._Item:false;
    return(
      <Div>
        {
          (this.props.edgeWishlist && this.props.edgeWishlist.length !== 0) ?
            <Div>
              {
                !item ?
                  <Div>
                    none
                  </Div>:
                  <ImageGallery
                    fromWishlist
                    onUpdateItem = {this.props.onUpdateItem}
                    item={item}
                    onContactClick = {this.props.onContactClick}
                    onAddToWishlist = {this.props.onAddToWishlist}
                    userProfile = {this.props.userProfile}
                    history={this.props.history}
                  />
              }
              <Div themed>
                <H3 textAlign='center'>
                  {OrganizeData(this.props.edgeWishlist).length} Items
                </H3>
              </Div>
              <ReactTable
                getTrProps={(state, rowInfo, column) => {
                  return {
                    style: {
                      cursor:'pointer',
                      border: rowInfo.index === this.state.currentRowSelected ? '5px solid green' : ''
                    }
                  }
                }}
                getTdProps={(state, rowInfo, column, instance) => {
                  return {
                    onClick: (e, handleOriginal) => {
                      if (handleOriginal && rowInfo.original.inStock !== 'unconfirmed') {
                        this.handleChangeRow(rowInfo.index)
                        handleOriginal()
                      }
                    }
                  }
                }}
                minRows={0}
                data={OrganizeData(this.props.edgeWishlist)}
                columns={columns}
                className ='-striped -highlight'
              >
              </ReactTable>

            </Div>:
            <Div>
              <NoWishlist />
              <MyShoppingLinks
                history={this.props.history}
              />
            </Div>
            }
      </Div>
    )
  }
}

export default Class;
