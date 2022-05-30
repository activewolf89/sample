import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import trash from 'images/2020Christmas/Scrap.jpg'
import waxToGold from 'images/waxtogold.jpg'
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import {H3} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div position='relative'  backgroundColor='white' color='black'   maxHeight='30vh' overflowY='scroll'>

      <Div  border='1px solid black'>

        <H3 textAlign='center' style={{textDecoration:'underline'}}>Current Metal Prices</H3>
        <Div display='flex' justifyContent='space-between' overflowX='auto' flexWrap='nowrap'>
          {
            props.metalObjects.map((obj)=>{
              return (
                <Div fontStyle='italic'>
                  {obj.Type}: ${obj.Rate}
                </Div>
              )
            })
          }
        </Div>
      </Div>
      <P>
        <Ul>
          <Li>
            Your precious metals can be transformed or traded in for 100% metal-credit towards a new peice.
          </Li>
          <Li>
            Our process begins with taking your metals, finding what new style you like best, and creating the drawings, weighing out the metals, and printing a 3D wax for you to view.
          </Li>
          <Li>
            Every step of the way you will be involved in the design and we will do the rest after approval!
          </Li>


        </Ul>
        <Div display='flex' justifyContent='space-around'>
          <img src={trash} style={{width:'100vw',maxWidth:'300px',height:'300px'}} alt="scrap gold" />
          <img src={waxToGold} style={{width:'100vw',maxWidth:'500px',height:'300px'}} alt="wax to gold" />
        </Div>

      </P>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
