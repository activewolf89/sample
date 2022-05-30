import React,{Component} from "react";
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import Span from 'shared/Span';
import styled from 'styled-components';
import Button from 'shared/Button';
import slightImage from 'images/veins.jpg'
const StyledButton = styled(Button)`
  color: white;
  overflow: hidden;
  width: 100%;
  background: url(${slightImage}) no-repeat;
          cursor:pointer;
          border: none;
`
// -----
// -----


class funcC0mp extends Component{

    render(){

  return (
    <Div>
      {
        this.props.eventsChecklist && this.props.eventsChecklist.calculated ?
          <StyledButton onClick={()=>{this.props.onContactClick('events')}}>
            <Span fontWeight='bold'>
              Active Sale
            </Span>
            <small style={{padding:'0 3px'}}>
              <Span fontStyle="italic">(
                <FontAwesome name={"plus"} style={{padding:'0 5px'}} />
              )</Span>
            </small>
          </StyledButton>:
        this.props.eventsChecklist && this.props.eventsChecklist.events.length > 0 ?
          <StyledButton onClick={()=>{this.props.onContactClick('events')}}>
            <Span fontWeight='bold'>
              Upcoming Sale
            </Span>
            <small style={{padding:'0 3px'}}>
              <Span fontStyle="italic">(
                <FontAwesome name={"plus"} style={{padding:'0 5px'}} />
              )</Span>
            </small>
          </StyledButton>:
          <Div>

          </Div>
      }


    </Div>
  )
}
}
funcC0mp.propTypes = {

}
export default funcC0mp;
