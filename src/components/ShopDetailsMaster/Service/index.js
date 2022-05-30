/**
 *
 * Service
 *
 */

import React from 'react';

//shared -----
import SideNavigation from 'shared/SideNavigation'
import SideNavParent from 'shared/SideNavigation/SideNavParent.js'
export class Service extends React.Component {


  render() {
    return (
      <SideNavParent>
        <SideNavigation
          array = {this.props.servicesArray}
          history = {this.props.history}
        />

      </SideNavParent>
    );
  }
}

Service.propTypes = {
};



export default Service;
