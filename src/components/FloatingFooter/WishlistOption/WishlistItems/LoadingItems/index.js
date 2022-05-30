import React from 'react';
import PropTypes from 'prop-types';
//shared
import CookieString from 'containers/App/HelperFunctions/CookieString';

class LoadingItems extends React.Component {

  componentDidMount(){
    this.props.loadItems(CookieString('wishlistItems'))
  }
  render() {
    return <div>Loading...</div>;
  }
}
// -----
LoadingItems.propTypes = {
  loadItems: PropTypes.func.isRequired
}
export default LoadingItems;
