import React from 'react';
import Div from 'shared/Div';
import WordCompressor from 'shared/WordCompressor';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import ColorCircle from './ColorCircle';
import NumberFormat from 'react-number-format'
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';

// -----
const Description = (props) =>{
  return (
    <Div padding='0 10px' fontWeight='bold'>
      <Div fontWeight='bold' height='80px' overflow='hidden'>
        {props.name &&
          <WordCompressor
            text={CapitalizeFirstLetter(props.name)}
            size={35}
          />
        }
      </Div>
      <NoMPUl display='flex' childrenMargin='0 3px'>
        Price:
        <Li>
          <Div  textDecoration={props.specialPrice ? 'line-through':''}>
            <NumberFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
          </Div>
        </Li>
        <Li>
          <Div fontWeight='bold' color='green'>
            <NumberFormat value={props.specialPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
          </Div>
        </Li>
      </NoMPUl>
      <Div display='flex' alignItems='center'>
        Metal:
        <ColorCircle
          colorArray={props.metalColor.split('/')}
        />
        <Div margin='0 5px'>
          {CapitalizeFirstLetter(props.metalType)}
        </Div>
      </Div>
      <Div display='flex' alignItems='center'>
        Size:

        <Div margin='0 5px'>
          {props.ItemSize}
        </Div>
      </Div>
    </Div>
  )
}
Description.propTypes = {
}
export default Description;
