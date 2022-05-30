import React,{Component} from "react";
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import Span from 'shared/Span';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
class WordCompressor extends Component{
  constructor(props){
    super(props)
    this.state = {
      isClickToExpand: false,
      shouldNotExpand: this.props.shouldNotExpand
    }
    this.handleClickToExpand = this.handleClickToExpand.bind(this)
  }
  handleClickToExpand = function(){
    if(!this.state.shouldNotExpand){
   this.setState({
     isClickToExpand: !this.state.isClickToExpand
   })
 }
 }
  render(){
    return (
        <Div display='flex' flexWrap='nowrap' fontStyle='italic' cursor={this.props.clickToExpand ? 'pointer':''} justifyContent='center'>
          {
            this.state.isClickToExpand &&
            <Div onClick={()=>{this.handleClickToExpand()}}>
              {this.props.text }

            </Div>
          }
          {
            !this.state.isClickToExpand &&

            <Div onClick={()=>{this.handleClickToExpand()}} display='flex' flexWrap='nowrap'>
              <Div >
                <Div display='flex' alignItems='center' justifyContent='center' flexWrap='wrap'>



                  {!this.props.fourC && this.props.text.substring(0,this.props.size) }
                  {
                      this.props.fourC &&
                    <Div display='flex'  flexDirection='column' alignItems='center'>
                      <Div >
                        <Div whiteSpace='nowrap' overflowX='auto' width='220px'>
                          {this.props.fourC}
                        </Div>

                      </Div>
                      {this.props.text.substring(0,this.props.size) }
                    </Div>
                  }
                </Div>
              </Div>
              {
                this.props.text.length > this.props.size &&
                <Span whiteSpace='nowrap'>
                  ...

                  {
                    this.props.clickToExpand &&
                    <Span>
                      <FontAwesome name='caret-down' />
                    </Span>
                  }
                  {
                    this.props.readMore &&
                    <Span underline italic>
                      <StyledLink to={this.props.to}>
                        read more
                      </StyledLink>
                    </Span>
                  }
                </Span>
              }
            </Div>
          }

        </Div>

    )
  }
}


WordCompressor.propTypes = {
  text: PropTypes.string,
  clor: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.number.isRequired
}
export default WordCompressor;
