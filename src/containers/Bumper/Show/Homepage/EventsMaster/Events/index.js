import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import Button from 'shared/Button';
import Countdown from 'shared/Countdown';
import StyledLink from 'shared/StyledLink';
// -----
const funcC0mp = (props) =>{
  var later;
  var today = new Date().setHours(0,0,0,0);
  var d1 = new Date(props.start)
  if(d1 < today){
    //happening now
    later = false
  } else {
    later = true
    //happening later
  }
  return (
    <Div   border="2px solid black">
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
        {
          props.picture &&
          <Div>
            {
              props.shopLink ?
                <StyledLink to={props.shopLink}>
                  <img src={props.picture} alt={props.title} style={{width:'100%', height:'300px'}} />
                </StyledLink>:
                <Div cursor='pointer' onClick={()=>{props.onContactClick(props.contact.name)}}>
                  <img src={props.picture} alt={props.title} style={{width:'100%', height:'300px'}} />
                </Div>

            }
          </Div>
        }
      </Div>

      <Title bold>
        {props.promo}
      </Title>
      <Div >
        {
          props.shopLink &&
          <Div padding='5px'>
            <StyledLink to={props.shopLink}>
              <Button width='100%' >Browse {props.category}</Button>
            </StyledLink>
          </Div>
        }
        {
          props.contact.name === "appointment" &&
          <Div padding='5px' onClick={()=>{props.onContactClick('appointment',false,`Schedule an appointment for ${props.title}`)}}>
            <Button width='100%' >Schedule Appointment</Button>
          </Div>
        }
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
