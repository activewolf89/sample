import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
import { withBreakpoints  } from 'react-breakpoints'

// -----
const KnowledgeOptionlist = (props) =>{

  const {pathname} = props.history.location
  return (
    <Div   slightBottomShadow display='flex'  overflow='auto' maxWidth='100vw' flexWrap='nowrap'>
      {
        props.knowledgeArray && props.knowledgeArray.map((obj,idx)=>{
          return (
            <Div key={idx}>
              <StyledLink to={obj.clickTo} >
                <Div padding="20px" textAlign='center' themed >
                  <Div padding='5px'  whiteSpace='nowrap' capitalize>
                    <small style={{fontWeight:pathname.includes(obj.clickTo) ? 'bold':'normal'}}>
                      {obj.name}
                    </small>
                  </Div>
                </Div>
              </StyledLink>
            </Div>
          )
        })
      }
    </Div>
  )
}
KnowledgeOptionlist.propTypes = {
}
export default withBreakpoints(KnowledgeOptionlist);
