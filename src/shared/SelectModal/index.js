import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
import {H4} from 'shared/H';
import FontAwesome from 'react-fontawesome';
import OutsideAlerter from "shared/OutsiderAlert";
import A from 'shared/A';

export const ModalCSS =  styled(Div)`
position: fixed; /* Stay in place */
z-index: 10; /* Sit on top */
padding-top: 10px; /* Location of the box */
left: 0;
top: 0%;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

`;

// -----
const SelectModal = (props) =>{
  var newArray = []
   props.options.forEach((option1,idx)=>{
    if(option1.name.toLowerCase() === props.selected.split('-').join(' ').toLowerCase()){
      newArray.unshift(option1)
    } else {
      newArray.push(option1)
    }
   })
   var options = newArray.map((option,index,arr)=>{
    return (
      <Div key={index}
        borderBottom='1px solid black'
        display="flex"
        alignItems="center"
        margin="10px "
        cursor="pointer"
        onClick={()=>{props.history.push(option.destination + props.history.location.search); props.onCloseModal()}}>
        <FontAwesome name={index === 0 ? "circle":"circle-thin"} style={index === 0 ? {color:'black'}:{color:'black'}} />
        <Div margin="10px" fontWeight={index === 0 ?"bold":""} >
          <A color='black'>
            {option.name}
          </A>
        </Div>
      </Div>
    )
  })
  return (
    <Div >
      <ModalCSS>
        <OutsideAlerter callback = {()=>{props.onCloseModal()}}>

          <Div
            backgroundColor="white"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="80%"
            height="100%"
            maxHeight="400px"
            maxWidth="400px"
            overflowY="auto"
            border='3px solid beige'
          color="black">

            <Div
              themed
              display="flex"
              justifyContent="space-between"
              padding="10px"
              position="sticky"
              top="0"
              borderBottom = "1px solid black"
            >
              <Div />
              <H4>Searching For</H4>
              <Div cursor="pointer">
                <FontAwesome name="close" onClick={props.onCloseModal}/>
              </Div>

            </Div>
            <Div onClick={()=>{props.onCloseModal()}}>
              {options}
            </Div>
          </Div>
        </OutsideAlerter>
      </ModalCSS>

    </Div>
  )
}
SelectModal.propTypes = {
}
export default SelectModal;
