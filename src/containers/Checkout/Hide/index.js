import React from 'react';
import Div from 'shared/Div';
import ToggleButton from '../ToggleButton';
import SideNavigation from 'containers/Bumper/Shared/SideNavigation';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

// -----
const funcC0mp = (props) =>{
  var isSpecific = !props.history.location.pathname.includes('item-')

  return (
    <Div  width='0px' zIndex='10'   height='100vh' position='sticky' display={props.toggle ? 'block':'none'} top='0' >

      <SideNavigation>
        <Switch>
          <Route path="/shop" render={routeProps => {
            return <Shop
              flash = {props.flash}
              ratio = {props.ratio}
              filterCount = {props.filterCount}
              isOpen = {props.isOpen}
              onTheChange = {props.onTheChange}
              options = {props.options}
              revealedAmount = {props.revealedAmount}
              onToggleDetail = {props.onToggleDetail}
              history={props.history}
              searchableCategoryObject = {props.searchableCategoryObject}
              categoryObjects = {props.categoryObjects}
                   />
          }} />
          <Route path="/" render={routeProps => {
            return <Home
              flash = {props.flash}
              isOpen = {props.isOpen}
              onTheChange = {props.onTheChange}
              options = {props.options}
              revealedAmount = {props.revealedAmount}
              onToggleDetail = {props.onToggleDetail}
              history={props.history}
              searchableCategoryObject = {props.searchableCategoryObject}
              categoryObjects = {props.categoryObjects}
                   />
          }} />

        </Switch>
        <ToggleButton
          flash = {props.flash}
          isSpecific = {isSpecific}
          toggle={props.toggle}
          onToggle = {props.onToggle}
          whichRoute = {props.whichRoute}
          revealedAmount = {props.revealedAmount}
          totalCount={props.totalCount}
        />
      </SideNavigation>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
