  import React,{lazy,Component,Suspense} from "react";
import Div from 'shared/Div';
import { Switch, Route,Redirect } from 'react-router-dom';
import LoadingIndicator from 'shared/LoadingIndicator';
import M_Homepage from './M_Homepage';
import E_FrontEnd from './E_Frontend'
import E_Backend from './E_Backend'
import U_Frontend from './U_Frontend'
import S_Links from './S_Links'
import Button from 'shared/Button';
import ScrollToTop from './ScrollToTop';


class Class extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <Div  display='flex' flexWrap='nowrap' justifyContent='center' style={{minHeight:'100vh'}}  position='relative' >

        <Suspense fallback={<LoadingIndicator />}>
          <Div  maxWidth='1500px' width='100vw'  borderArmoire position='relative'>

            <Switch>
              <Route exact path="/" render={routeProutes => {return <M_Homepage /> }} />
              <Route path="/event-planner-front-end" render={routeProutes => {return <E_FrontEnd /> }} />
              <Route path="/event-planner-back-end" render={routeProutes => {return <E_Backend /> }} />
              <Route  path="/user-front-end" render={routeProutes => {return <U_Frontend /> }} />
              <Route path="/snapshot-links" render={routeProutes => {return <S_Links /> }} />

              }} />

              }} />

              }} />

              }} />

              <Route exact path="/index.html" render={routeProps => {
                return <Route exact path="/" render={routeProutes => {return <M_Homepage /> }} />
              }} />
            </Switch>

          </Div>
        </Suspense>

      </Div>

    )
  }
}

export default Class;
