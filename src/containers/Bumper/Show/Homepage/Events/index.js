import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import P from 'shared/P';
import Button from 'shared/Button';
import Countdown from 'shared/Countdown';
import StyledLink from 'shared/StyledLink';
// -----
const funcC0mp = (props) =>{
  var later;
  var today = new Date().setHours(0,0,0,0);
  var d1 = new Date(props.start)
  var d2 = new Date(props.end)
  if(d1 < today){
    //happening now
    later = false
  } else {
    later = true
    //happening later
  }
  return (
    <Div themed  border="2px solid black">
      <Div >
        <Title bold>
          {props.title}
        </Title>
        <Title fontStyle="italic">
          {props.month}
        </Title>
        <Title>
          {
            later ? <Div>
              <Div backgroundColor='red'>
                Starts In
              </Div>
              <Countdown showText date={props.start}/>
            </Div>:
            <Div>
              <Div backgroundColor='green'>
                Happening Now
              </Div>
              <Countdown showText date ={props.end}/>

            </Div>
          }
        </Title>
        <Div>

          <StyledLink to={props.shopLink}>
            <img src={props.picture} alt={props.title} style={{width:'100%', height:'300px'}} />
          </StyledLink>
        </Div>
      </Div>

      <Title bold>
        {props.promo}
      </Title>
      <Div >
        <Div padding='5px'>
          <StyledLink to={props.shopLink}>
            <Button width='100%' themed>Browse {props.category}</Button>
          </StyledLink>
        </Div>
        <Div padding='5px' onClick={()=>{props.onContactClick('appointment',false,`Schedule an appointment for ${props.title}`)}}>
          <Button width='100%' lightThemed>Schedule Appointment</Button>
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
