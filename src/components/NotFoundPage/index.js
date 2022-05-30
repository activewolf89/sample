/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import PhotoLinkGrid from 'shared/PhotoLinkGrid';
import StyledLink from 'shared/StyledLink'

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Div>
        <Div display="flex" justifyContent="center" alignItems="center" height="100%"   flexDirection='column' padding='10px '>
          <Div color='black' flexDirection='column'  display="flex" width="300px" padding='20px' alignItems="center" justifyContent='center' borderBottom="3px solid black">
            <Title capitalize bold>
              Page Not Found
            </Title>
            <Title capitalize bold>
              {this.props.history.location.pathname}
            </Title>
          </Div>
          <StyledLink to='/'>
            Back to Homepage
          </StyledLink>

        </Div>
    </Div>
    );
  }
}
