import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import PropTypes from 'prop-types';
//shared
import StyledLink from 'shared/StyledLink';

// -----
const GalleryLink = (props) =>{
  return (
    <Div display="flex" color="gray" flexWrap="nowrap" >
      {props.history.location.pathname.split('/').map((segment,idx,arr)=>{
        return (
          <Div key={idx} fontSize="14px">
            {(idx !== 0 && idx !== arr.length -1) ?
              <Div fontSize="14px">
                <StyledLink color="gray" to={'/' + (idx === 1 ? segment.toUpperCase(): arr[idx -1] + '/' + segment.toUpperCase())}><Span  textDecoration='underline'>{segment.toUpperCase()}</Span></StyledLink>
                /
              </Div>:
              segment.toUpperCase()
            }
          </Div>

        )
      })
      }
    </Div>
  )
  }

GalleryLink.propTypes = {
  history: PropTypes.object.isRequired
}
export default GalleryLink;
