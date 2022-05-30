import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import StyledLink from 'shared/StyledLink';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Title from 'shared/Title';
// -----
function returnedNumberArray(arr){
  var newArr = []
  arr.forEach((obj, idx)=>{
    newArr.push(idx + 1)
  })
  return newArr;
}

const QuickClicks = (props) =>{
  return (
    <Div>
      <Div display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Title>Page</Title>
        <NoMPUl childrenPadding="5px" display='flex' whiteSpace="nowrap">
          {returnedNumberArray(props.locations).map((number)=>{
            return(
              <Li  key={number}>
                <StyledLink to={props.locations[number - 1].link} color="black">
                  {
                    number === props.position ?
                      <Div cursor="pointer" bold textDecoration="underline">
                        {number}
                      </Div>:
                      <Div cursor="pointer">
                        {number}
                      </Div>
                  }
                </StyledLink>
              </Li>
            )
          })}
        </NoMPUl>
      </Div>
      <Div flexWrap="nowrap" alignItems="center" display="flex" justifyContent="space-between">
        <StyledLink to={props.locations[props.position === 1 ? props.locations.length - 1:props.position - 2].link}>
          <Button>{props.locations[props.position === 1 ? props.locations.length - 1:props.position - 2].name}</Button>
        </StyledLink>

        <StyledLink to={props.locations[props.position >=props.locations.length ? 0:props.position].link}>
          <Button>{props.locations[props.position >=props.locations.length ? 0:props.position].name}</Button>
        </StyledLink>
      </Div>
      <Div padding="10px 0">
        <Button width='100%' themed>Schedule An Appzointment</Button>
      </Div>
    </Div>
  )
}
QuickClicks.propTypes = {
}
export default QuickClicks;
