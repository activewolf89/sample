import React,{Component} from "react";

import Div from 'shared/Div';
import Input from 'shared/Input';
import Button from 'shared/Button';
import Span from 'shared/Span';
import {makeSelectPromo} from 'containers/Bumper/selectors';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
class PromoCode extends Component{
  constructor(props){
    super(props)
    this.state = {
      code: ''
    }
    this.handleCode = this.handleCode.bind(this)
  }
  handleCode = function(val){
    this.setState({
      code: val
    })
  }
  render(){
    return(
    <Div  >
      {
        !this.props.promoObject.justSuggestion && this.props.promoObject && this.props.promoObject.active &&
        <Div>
          <Div>
            Promo: <Span fontWeight='bold'>{this.props.promoObject.name}</Span>
          </Div>
          <Div display='flex' padding='3px'>

            <Input style={{backgroundColor:'gray', color:'white',fontStyle:'italic'}} type='text' readOnly value={this.props.promoObject.code}  placeholder='code' />
            <Div padding='0 3px'>
              {
                !this.props.applied ?
                  <Button onClick={()=>{!this.props.applied && this.props.onApply(this.props.promoObject.value,this.props.promoObject.isPercent)}}>apply</Button>:
                  <Span color='green' fontStyle='italics'>applied!</Span>
              }
            </Div>
          </Div>
        </Div>
      }
    </Div>
    )
  }
}
export function mapDispatchToProps(dispatch){
  return {
  }
}
const mapStateToProps = createStructuredSelector({
  promoObject: makeSelectPromo()
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(PromoCode));


//--------->
//

// import { compose } from 'redux';
//   font-weight: ${prop('fontWeight','')};
//   font-family: ${prop('fontFamily','italics')};
//   font-style: ${prop('fontStyle','')};
//   font-size: ${prop('fontSize','')};
//   margin: ${prop('margin','')};
//   padding: ${prop('padding','')};
//   display: ${prop('display','')};
//   text-align: ${prop('textAlign','')};
//   line-height: ${prop('lineHeight','')};
//   background-color: ${prop('backgroundColor','')};
//   text-decoration: ${prop('textDecoration','none')};
//   color: ${prop('color','white')};
//   cursor: ${prop('cursor','pointer')};
// }
// ${props => props.colored && css`
//   color: red;
// `}
//   :hover {
//     text-decoration: none;
//     color: maroon;
//   }
//
// `;
//
//
//
// // -----
// const TheStyledLink = (props) =>{
//   return (
//     <Div >
//       <StyledLink textDecoration={props.textDecoration} to={props.to} color={props.color} onClick={()=>props.handleExitAllOpen()}>
//         <Div height='100%'>
//           <Span color={props.colored ? 'maroon':''} height='100%'>
//             {props.children}
//           </Span>
//         </Div>
//       </StyledLink>
//     </Div>
//
//   )
// }
// export function mapDispatchToProps(dispatch){
//   return {
//     handleExitAllOpen: ()=>dispatch(handleExitAllOpen())
//   }
// }
// const mapStateToProps = createStructuredSelector({
// })
// const withConnect = connect(mapStateToProps, mapDispatchToProps);
//
// export default withRouter(compose(
//   withConnect
// )(TheStyledLink));
