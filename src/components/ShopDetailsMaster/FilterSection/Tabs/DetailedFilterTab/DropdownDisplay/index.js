import React,{Component} from "react";
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import styled,{css} from 'styled-components';
import Ranges from '../../PriceTab';
import StaticOptions from '../StaticOptions';

const DropdownContainer = styled(Div)`
  background-color: white;
${props => props.sortThis && css`
  display: block;
  max-width: auto;
  margin: 0 auto;

  `}
  ${props => !props.range && css`
    display: block;
    max-width: auto;
    margin: 0 auto;

    `}

      `
    ;
class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      isActive: false,
      clickOutside: false
    }

    this.handleDropdown = this.handleDropdown.bind(this)
  }
  handleDropdown = function(isOpen){
    this.setState({
      isActive: !this.state.isActive
    })

  }

  render(){
    var FindToFixed = function(detailField){
      switch(detailField){
        case 'ItemSize':
        return 1;
        case 'ItemLength':
        return 1;
        case 'ItemMetalWeight':
        return 1
        default:
        return 0
      }
    }
    return(
      <Div >
        <Div position='relative' >
          <Div  onClick={()=>{this.handleDropdown()}} cursor="pointer" display="flex" flexWrap="no-wrap" alignItems="flex-end" >
            {this.props.obj.DetailName}
            <FontAwesome name={this.state.isActive ? "angle-up":"angle-down"} style={{marginLeft:'3px'}}/>
          </Div>
          {
            this.state.isActive &&
            <DropdownContainer>
              <Div  width='100%'>
                {
                  !isNaN(this.props.obj.categories[0]) ?
                    <Div>
                      <Ranges
                        detailName={this.props.obj.DetailName}
                        onShow = {this.props.onShow}
                        loadRest = {this.props.loadRest}
                        catId={this.props.catId}
                        rangeKey={this.props.obj.DetailField}
                        toFixed={FindToFixed(this.props.obj.DetailField)}
                        history = {this.props.history}
                        maxValue={Math.max(...this.props.obj.categories)}
                        arrayOfNumbers={this.props.obj.categories.map((val)=>{
                          if(typeof val ==='string'){
                            return Number(parseFloat(
                              val.replace(/,/g, ".")
                            ).toFixed(2))
                          } else {
                              return val
                          }
                        }).sort((a,b)=>{return Number(a) -Number(b)})}
                        DetailField={this.props.obj.DetailField}
                        searchableKey={this.props.obj.DetailField}
                        allProducts = {this.props.allProducts}
                        numberForReveal = {this.props.revealedProducts.length}
                      />
                    </Div>
                  :
                  <Div>
                    <StaticOptions
                      onShow = {this.props.onShow}
                      loadRest = {this.props.loadRest}
                      catId={this.props.catId}
                      onDropDown = {this.handleDropdown}
                      numberForReveal = {this.props.revealedProducts.length}
                      DetailField={this.props.obj.DetailField}
                      isSort={this.props.isSort}
                      allProducts = {this.props.allProducts}
                      vendorObject = {this.props.vendorObject}
                      isVendor = {this.props.isVendor}
                      rangeKey={this.props.obj.DetailName}
                      searchableKey={this.props.obj.DetailField}
                      arrayOfOptions={this.props.obj.categories}
                      history={this.props.history}
                    />
                  </Div>
                }
              </Div>
            </DropdownContainer>
          }
        </Div>
      </Div>

    )
  }
}

export default Class;
