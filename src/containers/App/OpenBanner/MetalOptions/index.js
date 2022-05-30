import React,{Component} from "react";

import Div from 'shared/Div';

import Intro from './Intro'
import Description from './Description'
// -----
class Class extends Component{

  render(){
    return (
      <Div  width='80vw'  borderTop='2px solid white' cursor='pointer' onClick={()=>{this.props.onContactClick('Metal')}}>
        <Div >
          <Intro  metalObjects = {this.props.metalObjects} />
          {
              false &&
            <Description
              metalObjects = {this.props.metalObjects}
              onOpen={this.handleOpen}
              onContactClick = {this.props.onContactClick}
            />
          }
        </Div>
      </Div>
    )
  }
}

export default Class;
