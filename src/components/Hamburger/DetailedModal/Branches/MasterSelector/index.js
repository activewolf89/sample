  import React,{Component} from "react";
  import NoMPUl from 'shared/NoMPUl';
  import Li from 'shared/Li';
  import Div from 'shared/Div';
  import styled from 'styled-components';

class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      chosen: 0
    }
  }
  render(){
    return(
      <Div>
        <NoMPUl>

          {this.props.options.map((option,idx)=>{
            return (
              <Li key={option.name}>
                <Div position='relative'>
                  {
                    idx !== this.state.chosen &&
                    <Div width='100%' height='100%' backgroundColor='black' opacity='.7' position='absolute'>

                    </Div>
                  }
                  <img src={option.photo} style={{width:'200px',height:'200px'}} alt="options" />
                  {
                    idx !== this.state.chosen &&
                    <Div transform= "translate(-50%, -50%)" textAlign='center' whiteSpace='nowrap' position='absolute' left='50%' top='50%' >

                      {option.name}
                    </Div>
                  }
                </Div>
              </Li>
            )
          })}
        </NoMPUl>
      </Div>
    )
  }
}

export default Class;
