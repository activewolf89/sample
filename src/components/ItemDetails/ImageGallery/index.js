import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared

import MainTitle from './MainTitle';
import TopBanner from './TopBanner';
import ActionDetails from 'shared/ActionDetails';
import GeneralGrid from './GeneralGrid';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import styled from 'styled-components';
import MainImageWithOptions from './MainImageWithOptions';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
import MasterItemStyleConverter from 'containers/App/HelperFunctions/MasterItemStyleConverter'
import OrganizeArrayofImages from 'containers/App/HelperFunctions/OrganizeArrayofImages';
const StyledH5 = styled.h5`
font-size: 16px;
  @media only screen and (min-width: 996px) {
  font-size: 20px;
  }
`
const StyledDiv = styled(Div)`
flex-wrap: wrap;
display:flex;
justify-content: center;
flex-direction: column;

@media only screen and (min-width: 1000px) {

  flex-wrap: nowrap;
}

`

class ImageGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageIndex:0,
    }
    this.handleChangeView = this.handleChangeView.bind(this)

  }
handleChangeView = function(idx){
  this.setState({
    imageIndex: idx
  })
}


  render() {
    const item = this.props.item
    return (
      <Div  padding='0 5px'>
        <TopBanner
          ItemKey = {item.ItemKey}
          categoryName={item.CategoryName}
          history={this.props.history}
          onUpdateItem = {this.props.onUpdateItem}
        />

        <StyledDiv >
          <Div width='100%'  >
            <MainImageWithOptions
              Vision360Static = {this.props.item._Vision360Static}
              ItemKey = {this.props.item.ItemKey}
              ItemInventoryType = {this.props.item.ItemInventoryType}

              ItemStyle = {MasterItemStyleConverter(this.props.item)}
              imageIndex = {this.state.imageIndex}
              ArrayOfImages = {OrganizeArrayofImages(this.props.item, MasterItemStyleConverter(this.props.item))}
              onChangeView = {this.handleChangeView}
            />
          </Div>

          <Div padding='10px'>
            {
              item.ItemMetalType !== "" &&
              <Div color='gray'>

                <StyledH5 noBold>
                  {CapitalizeFirstLetter(item.ItemMetalType) + "-" + CapitalizeFirstLetter(item.ItemMetalColor)}
                </StyledH5>
              </Div>
            }
            <Div display = 'flex'  alignItems='center'>
              <MainTitle
                MainTitle = {CapitalizeFirstLetter(item.ItemStyle) + " " + CapitalizeFirstLetter(item.CategoryName)}
              />
            </Div>
            <Div >
              <GeneralGrid
                Item={this.props.item}
                ItemStatus = {this.props.item.ItemStatus}
                ItemType = {this.props.item.ItemKey.includes(190) ? 'diamond':'rest'}
              />
            </Div>
          </Div>
        </StyledDiv>
        <Div >
          <ActionDetails
            checkOutString = {this.props.checkOutString}
            history={this.props.history}
            item={this.props.item}
            description={this.props.item.Online_Web_Description}
            isActive = {true}
            userProfile = {this.props.userProfile}
            ItemKey = {this.props.item.ItemKey}
            ItemStatus = {this.props.item.ItemStatus}
            onContactClick = {this.props.onContactClick}
            onAddToWishlist = {this.props.onAddToWishlist}
            ItemType = {this.props.item.ItemKey.includes(190) ? 'diamond':'rest'}

          />
        </Div>
      </Div>

    )
  }
}
// -----
ImageGallery.propTypes = {
  onContactClick: PropTypes.func.isRequired,
  onAddToWishlist: PropTypes.func.isRequired,
  item: PropTypes.object,
}
export default ImageGallery;
