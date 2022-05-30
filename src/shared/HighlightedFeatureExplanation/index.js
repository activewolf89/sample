import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H';
import StyledLink from 'shared/StyledLink';
import A from 'shared/A';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex'  justifyContent='center' alignItems='center' height='100%' flexDirection='column' padding='10px'>


      <Div  display='flex' justifyContent='center' alignItems='center' flexDirection='column' >
        <StyledLink to={props.hyperlink} underline color={props.color}>
          <H3 >
            <A active textAlign='center' color='black'>
              {props.title}
            </A>
          </H3>

        </StyledLink>

      </Div>

    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
