import React,{Component} from "react";
import Div from 'shared/Div';
import PhotoLinkGrid from 'shared/PhotoLinkGrid';
import Line from 'shared/Line'

class Class extends Component{

  render(){
    return(
      <Div>
        <Div padding='10px 0'>

          <Div padding='5px 0'>
            <Line />
          </Div>
          <Line />
          <PhotoLinkGrid
            fromMyAccount
            history={this.props.history}
          />
          <Div padding='5px 0'>
            <Line />
          </Div>
          <Line />
        </Div>
      </Div>
    )
  }
}

export default Class;
