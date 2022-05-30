  import React,{Component} from "react";
  import Div from 'shared/Div';
  import styled,{css} from 'styled-components';
  import StyledLink from 'shared/StyledLink';
  import OutsiderAlert from 'shared/OutsiderAlert';
  import P from 'shared/P';
  const StyledDiv = styled(Div)`
    ${ props => props.short && css`
    width: 100vw;
    height: 200px;
    @media only screen and (min-width: 996px) {
      width: 332px;
      height: 332px;
    }
    `}
    ${ props => props.long && css`
      width: 100vw;
      height: 200px;
    @media only screen and (min-width: 996px) {
      width: 664px;
      height: 332px;
    }
    `}

  `
class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      showDescription: false
    }
    this.showDescription = this.showDescription.bind(this)
  }
  showDescription = function(){
    this.setState({
      showDescription: !this.state.showDescription
    })
  }
  render(){
    return(
        <StyledLink to={this.props.link}>
          <StyledDiv
            onMouseEnter={this.showDescription}
            onMouseLeave={this.showDescription}
            border='1px solid lightGray'
            backgroundColor='black'
            long={this.props.long}
            short={!this.props.long}
            backgroundImg={this.props.img}
            backgroundPosition='center'
            backgroundSize="contain"
            backgroundRepeat='no-repeat'
            position='relative'
          >
            <Div position='absolute' bottom='0' width='100%' opacity='.85' backgroundColor='lightGray' color='white'
              fontWeight='bold'
            textAlign='center'>
              {this.props.name}
              {
                this.state.showDescription &&
                <Div maxHeight="200px" overflowY='auto'>
                  <P>
                    {this.props.description}
                  </P>
                </Div>
              }
            </Div>
          </StyledDiv>
        </StyledLink>
    )
  }
}

export default Class;
