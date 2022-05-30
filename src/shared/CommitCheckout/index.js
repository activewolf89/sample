import React,{Component} from "react";
import Div from 'shared/Div';
import Button from 'shared/Button';
import Total from './Total';
import Info from './Info';
import Code from './Code';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
// -----

// var checkActive = function(checklist){
//   var result = false;
//   checklist.events.forEach((ev)=>{
//     if(ev.active){
//       if(ev.promo){
//         result = ev.promo
//       }
//     }
//   })
//   return result
// }
class Class extends Component{

  render(){
    // var eventResult = checkActive(this.props.eventsChecklist);

    return (
      <Div  >

        <Div width='100vw' maxWidth='996px'   padding='10px' >

          <NoMPUl childrenBorderBottom='1px solid lightGray'>

            <Li>
              <Info name1="Qty" name2 = {this.props.qty} />
            </Li>
            <Li>
              <Info name1="Shipping & Handling" name2 = {"Free"} />
            </Li>
            <Li>
              <Total name="Subtotal"
                inventoryList = {this.props.inventoryList}
                noBold = {this.props.taxableRate || this.props.taxableRate === 0} subTotal={this.props.subTotal} />
            </Li>
            {/* {
              eventResult &&
              <Li>
                <Code name1="Promotion Code" title={eventResult}  subTotal={'code'} />
              </Li>
            } */}
            {
              (this.props.taxableRate || this.props.taxableRate === 0) &&
              <Li>
                <Total name="WA Tax"  subTotal={this.props.taxableRate} percent />
              </Li>

            }
            {
              (this.props.taxableRate || this.props.taxableRate === 0) &&
              <Li>
                <Total name="Total" subTotal={
                  Math.ceil((100 * this.props.subTotal * (1 + this.props.taxableRate))) / 100
                } />
              </Li>

            }

            {
              this.props.isLoading ?
                <Button width='100%'>
                  <FontAwesome name='spinner' spin size="lg" />
                </Button>:
                <Div>
                  {

                    this.props.to ?
                      <Li>
                        <Div onClick={()=>{
                          window.scrollTo({ top: 0, behavior: 'smooth' });

                        }}>

                          <StyledLink to={this.props.to}>
                            <Button add  width='100%'>{this.props.endButton}</Button>
                          </StyledLink>
                        </Div>
                      </Li>:
                      <Li>
                        <Div >
                        <Button onClick={()=>{this.props.handleFinish(true)}} add  width='100%'>{this.props.endButton}</Button>
                      </Div>
                    </Li>
                }
              </Div>
            }
            </NoMPUl>
        </Div>
      </Div>
        )
        }
        }

Class.propTypes = {
}
export default Class;
