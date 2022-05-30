import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import Title from 'shared/Title';
import ArrayOfImages from './ArrayOfImages';
// -----
const funcC0mp = (props) =>{
  return (
    <Div>

      <Div display="flex" alignItems="flex-end" flexWrap="nowrap" id="3">
        <Title>Attachments/Hyperlinks:
          <Span padding='0 5px'>
            <a href={props.ltdennyLink}>
              link
            </a>
          </Span>
        </Title>
      </Div>
      {
        props.stringOfItemKeys !== "" &&
        <Div display="flex"  width="100%" flexDirection="column" alignItems="flex-start">
          <Div width="100%" padding="5px 0">
            <ArrayOfImages
              arrayOfItemKeys = {props.stringOfItemKeys.split(',')}
            />
          </Div>
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
