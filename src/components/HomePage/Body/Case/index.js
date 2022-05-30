import React,{Component} from "react";
import Div from 'shared/Div';
import CaseOptions from './CaseOptions';
import CaseCategory from './CaseCategory';

// -----

class Case extends Component{

  render(){
    return (
      <Div position='relative'>
        <Div  textAlign="center"  top="0%" color="white"  opacity='.9' right='0%' zIndex='10' width='100%'   themed>
          {this.props.name}
        </Div>
        <Div height='500px' backgroundImg={this.props.backgroundImg}  themed opacity=".9"  color="white"  backgroundPosition="center" backgroundSize="contain" backgroundRepeat="no-repeat" width='100%'  position="relative"   >
          <Div cursor='pointer' onClick={()=>{this.props.onFlip(this.props.color)}}  height='100%' width='100%' position='absolute'>

          </Div>
          {
            this.props.isFlipped &&
            <CaseCategory
              categoryObjects = {this.props.categoryObjects}
              titleColor={this.props.titleColor}
            />
          }
          <CaseOptions
            onFlip={this.props.onFlip}
            isFlipped = {this.props.isFlipped}
            color = {this.props.color}
          />
        </Div>
      </Div>
        )
  }
}

Case.propTypes = {
}
export default Case;
