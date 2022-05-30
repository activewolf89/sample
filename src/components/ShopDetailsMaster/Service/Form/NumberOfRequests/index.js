import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import Title from 'shared/Title'
import Button from 'shared/Button'
import FontAwesome from 'react-fontawesome';
// -----
const NumberOfRequests = (props) =>{
  return (
    <Div>

      <NoMPUl margin="10px 0" display="flex" justifyContent="center" alignItems="center" childrenPadding = "0 5px">

        <Li>
          <Title>{props.currentRequest + 1} of {props.repairRequests.length} requests</Title>
        </Li>
        <Li>
          <Button onClick={()=>{props.onIncrementRequest()}}>
            <FontAwesome name="plus"/>
          </Button>
        </Li>

      </NoMPUl>
      <NoMPUl display="flex" justifyContent="center" flexWrap="wrap" childrenPadding = "5px 5px">

        {
          props.repairRequests.map((repair,index,array)=>{
            return (
              <Li key={index} onClick={()=>{
                if(props.currentRequest !== index){
                  props.onTransitionRequest(index)
                }
              }}>
                <Div cursor="pointer"  opacity={props.currentRequest === index ? '1':".7"} themed  width="80px" height="80px" borderRadius="10%" >
                  <Div  borderBottom="1px solid white">
                    <NoMPUl childrenPadding="0 5px"  height="30px" display="flex" justifyContent="space-between" alignItems="center" themed borderRadius ='5px 5px 0px 0px'>
                      <Li>
                        <Title>{index+1}</Title>
                      </Li>
                      {
                        props.currentRequest === index && array.length !== 1 &&
                        <Li>
                          <FontAwesome style={{color:'red'}} name={"minus-circle"} onClick={()=>{props.onRemoveRequest(index)}}/>
                        </Li>
                      }

                    </NoMPUl>
                  </Div>
                  <Div display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Title>{repair.type}</Title>
                  </Div>
                </Div>
              </Li>
            )
          })
        }

      </NoMPUl>
    </Div>
  )
}
NumberOfRequests.propTypes = {
  repairRequests: PropTypes.array.isRequired,
  currentRequest: PropTypes.number.isRequired,
  onIncrementRequest: PropTypes.func.isRequired,
  onTransitionRequest: PropTypes.func.isRequired,
  onRemoveRequest: PropTypes.func.isRequired,
}
export default NumberOfRequests;
