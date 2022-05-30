import {Link} from 'react-router-dom';
import { prop} from 'styled-tools';
import React from 'react';
import Div from 'shared/Div'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {handleExitAllOpen} from 'containers/App/actions';
import styled from 'styled-components';
import { compose } from 'redux';
const StyledLink =  styled(Link)`
  font-weight: ${prop('fontWeight','')};
  font-family: ${prop('fontFamily','italics')};
  font-style: ${prop('fontStyle','')};
  font-size: ${prop('fontSize','')};
  margin: ${prop('margin','')};
  padding: ${prop('padding','')};
  display: ${prop('display','')};
  text-align: ${prop('textAlign','')};
  line-height: ${prop('lineHeight','')};
  background-color: ${prop('backgroundColor','')};
  text-decoration: ${prop('textDecoration','none')};
  cursor: ${prop('cursor','pointer')};
}

  :hover {
    text-decoration: none;
  }

`;



function GoToTop() {
  window.scrollTo(0, 0);

}


// -----
const TheStyledLink = (props) =>{
  return (
    <Div >
      {
        props.stop ?
          <Div>
            {props.children}
          </Div>:
          <StyledLink textDecoration={props.textDecoration} to={props.to} onClick={(e)=>e.preventDefault(), GoToTop(), props.handleExitAllOpen()} color='black' >
            {props.children}
          </StyledLink>
          }
    </Div>

  )
}
export function mapDispatchToProps(dispatch){
  return {
    handleExitAllOpen: ()=>dispatch(handleExitAllOpen())
  }
}
const mapStateToProps = createStructuredSelector({
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(TheStyledLink));
