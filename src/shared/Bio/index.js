import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H'
import P from 'shared/P'
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Span from 'shared/Span'
import ShopToLink from 'shared/ShopToLink';
import StyledLink from 'shared/StyledLink';
import DetailedLook from './DetailedLook';
import Ul from 'shared/Ul';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexDirection='column'  >
      <H3>
        {props.title.toUpperCase()}
      </H3>
      {
        props.secretLink &&
        <Li>
          <StyledLink to={props.secretLink.link}>
            {props.secretLink.name}
          </StyledLink>
        </Li>
      }
      <NoMPUl listStyle='none'>

        <Li>
          <P>
            {props.description}
          </P>
        </Li>
        <Li>
          <Div fontStyle='italic'>
            {props.sideNote}
          </Div>
        </Li>
        <Li>
          <Div fontStyle='italic' display='flex' justifyContent='space-between'>
            {
              props.sideImages &&  props.sideImages.map((url,idx,arr)=>{
                return (
                  <img src={url} style={{width:'300px',height:'200px'}} alt={idx} />
                )
              })
            }
          </Div>
        </Li>
        <Li>
          <P underline fontStyle='italic'>
            {
              props.note &&
              <Span underline fontWeight='bold'>
                {props.note + " : "}
              </Span>
            }
            {props.descriptionDetail}
          </P>
        </Li>

        <Li>
          {props.list.length > 0 &&

            <NoMPUl>
              {props.list.map((obj,idx)=>{
                return(
                  <Li key={idx}>
                    <Span fontWeight='bold'>
                      {obj.title} -
                    </Span>
                    <P>
                      {obj.description}
                    </P>
                    <Ul>

                      {
                        obj.examples && obj.examples.map((ex,idx,arr)=>{
                          return (
                            <Li key ={idx}>
                              <DetailedLook obj = {ex}/>
                            </Li>
                          )
                        })
                      }
                    </Ul>
                  </Li>
                )
              })}
            </NoMPUl>

          }

          {props.summary &&
            <Div>
              <H3 fontWeight='bold'>
                Summary
              </H3>
              <P>
                {props.summary}
              </P>
            </Div>
          }
        </Li>

        <Li>
          {
            props.linkObject &&
            <Div>
              <ShopToLink
                linkObject = {props.linkObject}
              />
            </Div>
          }
        </Li>
      </NoMPUl>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
