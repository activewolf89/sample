import React,{Component} from "react";
import styled from 'styled-components';
import Div from 'shared/Div';
class Vision360 extends Component{
  constructor(props){
    super(props)
      this.state = {
        choice: 'still.jpg'
      }
  }


  render(){
    const StyledImg = styled.img`
    width: 150px;
    height: 150px;
      @media only screen and (min-width: 996px) {
      width: 250px;
      height: 250px;
      }
    `

    return(
      <Div  position='relative' >
        {
          this.props.MasterStyle ?
            <Div >

              <StyledImg src={`https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/${this.props.MasterStyle}/${this.props.small ? 'still_small.jpg':'still.jpg'}`}
                alt={this.props.ItemKey} />
            </Div>:
            <Div>

              <Div  >
                {
                  this.props.lifeStyle  ?
                    <img style={{width: this.props.width ? this.props.width:'150px',height: this.props.height ? this.props.height:'150px',}} src={`https://s7.v360.in/308/imaged/AsscherBracelet/lifestyle.jpg`}
                      alt={this.props.ItemKey} />:
                      <StyledImg src={`https://s4.v360.in/images/company/308/imaged/${this.props.ItemKey}/${this.state.choice}`}
                        alt={this.props.ItemKey} />
                }
              </Div>
              {
                this.props.showItemNumber &&
                <Div textAlign = 'center'>
                  {this.props.ItemKey}
                </Div>
              }

              {
                this.props.floatItemNumber &&
                <Div  bottom='0' left='5' position='absolute' textAlign='center' color="gray" fontStyle='italic'>
                  {this.props.ItemKey}
                </Div>
              }
            </Div>
        }
      </Div>

    )
  }
}



export default Vision360;
