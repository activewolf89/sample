import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Bio from 'shared/Bio';
import StyledLink from 'shared/StyledLink';
import FaqButton from 'shared/FaqButton';
import KnowledgeImage from './KnowledgeImage'
import DrumUpLink from './DrumUpLink'
import PhotoLinkGrid from 'shared/PhotoLinkGrid';
import Review from './Review';
import A from 'shared/A2';
require('./testImages.css')
// -----
const Layout = (props) =>{
  var findDetail = function(obj,pathname,whatToFind){
    var detail = ''
    for(let key in obj){
      if(pathname.includes(key)){
        switch(whatToFind){
          case 'image':
          detail = obj[key].image;
          break;
          case 'detail':
          detail = obj[key].detail
          break;
          case 'note':
          detail = obj[key].note
          break;
          case 'linkTo':
          detail = obj[key].linkTo
          break;
          default:
          break;
        }
      }
    }
    return detail
  }
  return (
    <Div >

      {
        !props.categoryObjects.searchableCategoryObject  ?
          <Div>
            Loading...
          </Div>:
          <Div>

            <NoMPUl childrenBorderBottom='2px solid gray' childrenPadding='5px'>
              {
                props.arrayOfConversation.map((obj,i)=>{
                  return(
                    <Li key={i}>

                      <Div  display='flex' flexWrap='wrap'>
                        <Div width='100%' >
                          <Div >
                            <Div backgroundColor='black' width='100vw' maxWidth='996px' display='flex' justifyContent='center'>

                              <Div  maxWidth='400px' textAlign='center'>
                                <KnowledgeImage sentImage={!obj.categoryDetails ? obj.image:findDetail(obj.categoryDetails,props.pathname,'image')} />
                              </Div>
                            </Div>
                            <Bio
                              sideNote = {obj.sideNote}
                              sideImages = {obj.sideImages}
                              title={obj.title}
                              list = {obj.list ? obj.list: []}
                              note = {findDetail(obj.categoryDetails,props.pathname,'note')}
                              descriptionDetail = {!obj.categoryDetails ? '':findDetail(obj.categoryDetails,props.pathname,'detail')}
                              description={obj.description}
                              linkObject = {obj.linkTo ? DrumUpLink(obj,props.pathname):false}
                              summary = {obj.summary ? obj.summary:''}
                              secretLink = {obj.secretLink}
                            />
                          </Div>
                        </Div>

                      </Div>
                      {
                        obj.shop && props.categoryObjects &&
                        <Div>
                          <PhotoLinkGrid
                            fromKnowledgeCenter
                            vendorCategoryObject = {props.categoryObjects.vendorCategoryObject}
                            shopName={obj.shop}
                          />
                        </Div>
                      }
                      {
                        props.pathname === '/knowledge-center/who-we-are/our-reviews' &&
                        <Div>
                          <Review
                            yelpReviews={props.yelpReviewObject}
                            googleReviews={props.googleReviewObject}
                          />
                        </Div>
                      }
                      {
                        obj.link &&
                        <Div>
                          <StyledLink to={obj.link.link}>
                            <A>{obj.link.name}</A>
                          </StyledLink>
                        </Div>
                      }

                    </Li>
                  )
                })
              }
              {
                !props.dontShowFAQ &&
                <Div  width='100%' padding = '10x 0'>
                  <FaqButton
                    faqLink = {props.faqLink}
                    onFaqClick = {props.onFaqClick}
                  />
                </Div>
              }
            </NoMPUl>

          </Div>
      }

    </Div>
  )
}
Layout.propTypes = {
}
export default Layout;
