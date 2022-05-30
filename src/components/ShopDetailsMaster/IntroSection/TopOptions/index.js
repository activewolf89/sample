import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import convertDashToTitle from 'containers/Shop/Helpers/convertDashToTitle'


const TopOptions = (props) =>{
  return (
    <Div display='flex' flexWrap='wrap'  justifyContent='space-around' themed>
      {props.categoryNames.map((string,idx)=>{
        if(convertDashToTitle(string) ===props.title){

          return(
            <Div width='50%' key={idx} themed border='2px solid white' onClick={()=>{}}>
              <Button themed active width='100%'>
                {CapitalizeFirstLetter(convertDashToTitle(string))}
              </Button>
            </Div>

          )
        } else {
          return(
            <Div width='50%' key={string} themed border='2px solid white' onClick={()=>{}}>
              <Button themed onClick={()=>{props.history.push(props.rootString + '/'+ string)}} width='100%'>
                {CapitalizeFirstLetter(convertDashToTitle(string))}
              </Button>
            </Div>

          )
        }
      })}
    </Div>
  )
}
TopOptions.propTypes = {
}
export default TopOptions;
