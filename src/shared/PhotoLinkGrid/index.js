import React from 'react';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Designers from './Photos/Designers.jpg';
import Earring from './Photos/Earring.jpg';
import EngagementRings from './Photos/EngagementRings.jpg';
import FineRing from './Photos/FineRing.jpg';
import GentsBand from './Photos/GentsBand.jpg';
import LadiesBands from './Photos/LadiesBands.jpg';
import LooseDiamonds from './Photos/LooseDiamonds.jpg';
import Necklace from './Photos/Necklace.jpg';
import Other from './Photos/Other.jpg';
import Services from './Photos/Services.jpg';
import Watch from './Photos/Watch.jpg';
import WhoWeAre from './Photos/WhoWeAre.jpg';
import Bracelets from './Photos/Bracelets.jpg';
import StyledLink from 'shared/StyledLink';
import Box from './Box';
import BreakApart from 'containers/App/HelperFunctions/BreakApart'
import Div from 'shared/Div'
import convertDashToTitle from 'containers/Shop/Helpers/convertDashToTitle'
import Button from 'shared/Button';

// -----
const PhotoLinkGrid = (props) =>{
  var GenerateLink = function(designer,catId){
    var obj = {
      110: '/shop/wedding-bands/mens-band',
      115: '/shop/wedding-bands/ladies-band',
      150: '/shop/fine-jewelry/earring',
      165: '/shop/fine-jewelry/necklace',
      130: '/shop/fine-jewelry/fine-ring',
      170: '/shop/fine-jewelry/bracelet',
      999: '/shop/fine-jewelry/other',
      500: '/shop/fine-jewelry/watches',
      190: '/shop/loose-diamonds',
      140: '/shop/engagement-rings',
    }

    return obj[catId] + "?ItemVendorName=" + designer
  }
var ConvertName = function(title){
var  objName = {
    'Engagement': {name:"Engagement Rings",photo:EngagementRings,shopLink:'/shop/engagement-rings'},
    'Diamond':{name:"Loose Diamonds",photo:LooseDiamonds,shopLink:'/shop/loose-diamonds'},
    "Ladies Bands":{name:"Ladies Bands",photo:LadiesBands,shopLink:'/shop/wedding-bands/ladies-bands'},
    "Mens Bands":{name:"Mens Bands",photo:GentsBand,shopLink:'/shop/wedding-bands/mens-bands'},
    "Earrings":{name:"Earrings",photo:Earring,shopLink:'/shop/fine-jewelry/earring'},
    "Necklaces":{name:"Necklaces",photo:Necklace,shopLink:'/shop/fine-jewelry/necklace'},
    "Fine Ring":{name:"Fashion Rings",photo:FineRing,shopLink:'/shop/fine-jewelry/fine-ring'},
    "Bracelets":{name:"Bracelets",photo:Bracelets,shopLink:'/shop/fine-jewelry/bracelet'},
    "Watches":{name:"Watches",photo:Watch,shopLink:'/shop/fine-jewelry/watch'},
    "Other":{name:"Other",photo:Other,shopLink:'/shop/fine-jewelry/other'},
    "Designers": {name:"Designers",photo:Designers,shopLink:'/designers'},
    "Services": {name:"Services",photo:Services,shopLink:'/services'},
    "About": {name:"WhoWeAre",photo:WhoWeAre,shopLink:'/about-us'},
  }


  return objName[title]
}
var ConvertName2 = function(title){
var  objName = {
    'engagement-rings': {name:"Engagement Rings",photo:EngagementRings,shopLink:'/shop/engagement-rings'},
    'diamond':{name:"Loose Diamonds",photo:LooseDiamonds,shopLink:'/shop/loose-diamonds'},
    "ladies-band":{name:"Ladies Bands",photo:LadiesBands,shopLink:'/shop/wedding-bands'},
    "mens-band":{name:"Mens Bands",photo:GentsBand,shopLink:'/shop/wedding-bands/mens-bands'},
    "earring":{name:"Earrings",photo:Earring},shopLink:'/shop/fine-jewelry/earring',
    "necklace":{name:"Necklaces",photo:Necklace,shopLink:'/shop/fine-jewelry/necklace'},
    "fine-ring":{name:"Fashion Rings",photo:FineRing,shopLink:'/shop/fine-jewelry/fine-ring'},
    "bracelet":{name:"Bracelets",photo:Bracelets,shopLink:'/shop/fine-jewelry/bracelet'},
    "watch":{name:"Watches",photo:Watch,shopLink:'/shop/fine-jewelry/watch'},
    "other":{name:"Other",photo:Other,shopLink:'/shop/fine-jewelry/other'},
    "Designers": {name:"Designers",photo:Designers},
    "Services": {name:"Services",photo:Services},
    "About": {name:"WhoWeAre",photo:WhoWeAre},
  }


  return objName[title]
}
var findObj = function(arrayOfPhotoLinkGrid,obj){
  var foundObject = {photo:'',howMany:'0'}
  arrayOfPhotoLinkGrid.forEach((newObj)=>{
    if(newObj.littleName === obj.match){
      foundObject.photo = newObj.photo
      foundObject.howMany = obj.count
    }
  })

  return foundObject
}
  var arrayOfPhotoLinkGrid = [
    {shop:true,littleName:'engagement-rings',knowledgeLink:"/knowledge-center/engagement-rings",catId:140,Name:"Engagement",shopLink:"/shop/engagement-rings",photo:EngagementRings},
    {shop:true,littleName:'loose-diamonds',knowledgeLink:"/knowledge-center/loose-diamonds",catId:190,Name:"Loose Diamonds",shopLink:"/shop/loose-diamonds",photo:LooseDiamonds},
    {shop:true,littleName:'ladies-bands',knowledgeLink:"/knowledge-center/ladies-bands",catId:115,Name:"Ladies Bands",shopLink:"/shop/wedding-bands",photo:LadiesBands},
    {shop:true,littleName:'gents-bands',knowledgeLink:"/knowledge-center/gents-bands",catId:110,Name:"Mens Bands",shopLink:"/shop/wedding-bands/mens-bands",photo:GentsBand},
    {shop:true,littleName:'earrings',knowledgeLink:"/knowledge-center/earrings",catId:150,Name:"Earrings",shopLink:"/shop/fine-jewelry/earring",photo:Earring},
    {shop:true,littleName:'necklaces',knowledgeLink:"/knowledge-center/necklaces",catId:165,Name:"Necklaces",shopLink:"/shop/fine-jewelry/necklace",photo:Necklace},
    {shop:true,littleName:'fine-rings',knowledgeLink:"/knowledge-center/fine-rings",catId:130,Name:"Fashion Rings",shopLink:"/shop/fine-jewelry/fine-ring",photo:FineRing},
    {shop:true,littleName:'bracelets',knowledgeLink:"/knowledge-center/bracelets",catId:170,Name:"Bracelets",shopLink:"/shop/fine-jewelry/bracelet",photo:Bracelets},
    {shop:true,littleName:'watches',knowledgeLink:"/knowledge-center/watches",catId:500,Name:"Watch",shopLink:"/shop/fine-jewelry/watch",photo:Watch},
    {shop:true,littleName:'others',knowledgeLink:"/knowledge-center/other",catId:999,Name:"Other",shopLink:"/shop/fine-jewelry/other",photo:Other},
    {shop:false,littleName:'',knowledgeLink:"/knowledge-center/services",catId:'',Name:"Services",shopLink:"/services",photo:Services},
    {shop:false,littleName:'',knowledgeLink:"/knowledge-center/designers",catId:'',Name:"Designers",shopLink:'/designers',photo:Designers},
    {shop:false,littleName:'',knowledgeLink:"/knowledge-center/who-we-are",catId:'',Name:"Who We Are",photo:WhoWeAre,shopLink:'/about-us'},
  ]
  return (

    <NoMPUl display='flex' justifyContent='center'  childrenPadding='5px' flexWrap='wrap'>
      {
        props.whichRoute &&
        <Div  flexWrap='noWrap' width='100%' overflowX='scroll' >
          <NoMPUl display='flex' childrenPadding='5px'>
            {
              arrayOfPhotoLinkGrid.map((obj,idx)=>{
                if(obj.shop){

                  return (
                    <Li key={idx}>
                      <Div  >
                        <Box
                          photo={obj.photo}
                          name={obj.Name}
                        />
                      </Div>
                    </Li>
                  )
                } else {
                  return ''
                }
              })

            }
          </NoMPUl>
        </Div>
      }
      {props.shopName ==="Fmx" &&
        <Div>
          <StyledLink to={'/diamonds/shop?StoneLab=FMX'}>
            <Button themed> Forevermark Diamonds</Button>
          </StyledLink>
        </Div>}
      {
        props.fromKnowledgeCenter &&
        Object.entries(props.vendorCategoryObject).map((obj,idx)=>{
          var newObj = obj[1]
          if(newObj.name === props.shopName){

            return(
              <NoMPUl key={idx} display='flex' flexWrap='wrap' childrenPadding='5px'>
                {newObj.categories.map((number,testIdx)=>{
                  var pulledObj
                  arrayOfPhotoLinkGrid.forEach((obj)=>{
                    if(number === obj.catId){
                      pulledObj = obj
                    }

                  })
                  return(
                    <Li key={testIdx}>
                      <StyledLink to={GenerateLink(newObj.name,pulledObj.catId)}>
                        <Box
                          chosen={false}
                          photo={pulledObj.photo}
                          name={ ` ${newObj.name} ` + pulledObj.Name}
                        />
                      </StyledLink>
                    </Li>
                  )
                })}
              </NoMPUl>
            )
          } else {
            return('')
          }
        })
      }
      {
        props.fromIntro &&
        props.categoryNames.map((name)=>{
          if(props.title === convertDashToTitle(name)){
            return (
              <Li key={name} >
                <Box
                  chosen={true}
                  photo={ConvertName2(name).photo}
                  name={ConvertName2(name).name}
                />

              </Li>
            )
          } else {
            return (
              <Li key={name} onClick={()=>{props.history.push(props.rootString + '/'+ name)}}>
                <Div >

                  <Box
                    chosen={false}
                    photo={ConvertName2(name).photo}
                    name={ConvertName2(name).name}
                  />
                </Div>

              </Li>
            )
          }
        })
      }

      {
          props.knowledgeArray && props.onSaleObject &&
        BreakApart(props.onSaleObject,props.knowledgeArray).map((obj,idx)=>{
          if(obj.count !== 0){
            var foundObj = findObj(arrayOfPhotoLinkGrid,obj)
            return(
              <Li key={idx}>
                <StyledLink to={obj.clickTo}>
                  <Box
                    photo={foundObj.photo}
                    name={obj.name}
                    howMany={foundObj.howMany}
                  />
                </StyledLink>
              </Li>
            )
          } else {
            return('')
          }
        })
      }
      {
        props.categoryArray && props.fromHeader &&
        props.categoryArray.map((obj,idx)=>{
          if(props.searchObj.name ==='Service Form'){
            return (

              <Li key={idx} onClick={()=>{props.onContactClick('service');props.travelTo()}}>
                <Box
                  chosen={idx === props.chosenIndex}
                  photo={ConvertName(obj.title).photo}
                  name={props.searchObj.name}
                />
              </Li>
            )
          }
          else if(props.searchObj.name ==='About Form'){
            return (

              <Li key={idx} onClick={()=>{props.travelTo()}}>
                <StyledLink to={'/knowledge-center/who-we-are'}>
                  <Box
                    chosen={idx === props.chosenIndex}
                    photo={ConvertName(obj.title).photo}
                    name={'Who We Are'}
                  />
                </StyledLink>
              </Li>
            )
          }
          else if(props.searchObj.name ==='Designer Form'){
            return (

              <Li key={idx} onClick={()=>{props.travelTo()}}>
                <StyledLink to={'/knowledge-center/designers'}>
                  <Box
                    chosen={idx === props.chosenIndex}
                    photo={ConvertName(obj.title).photo}
                    name={'Designer Homepage'}
                  />
                </StyledLink>
              </Li>
            )
          }else {

            return (
              <Li key={obj.title}>
                {idx === props.chosenIndex ?
                  <Div  position='relative' themedBorder={idx === props.chosenIndex} onClick={()=>{props.onChange(idx);props.travelTo()}}>
                    <StyledLink to={ConvertName(obj.title).shopLink} >
                      <Box
                        chosen={idx === props.chosenIndex}
                        photo={ConvertName(obj.title).photo}
                        name={ ConvertName(obj.title).name}
                      />

                    </StyledLink>
                  </Div>:
                  <Div  themedBorder={idx === props.chosenIndex} onClick={()=>{props.onChange(idx)}}>

                    <Box
                      chosen={idx === props.chosenIndex}
                      photo={ConvertName(obj.title).photo}
                      name={ConvertName(obj.title).name}
                    />
                  </Div>
                }
              </Li>
            )
          }

        })
      }

      {
          props.knowledgeArray && !props.onSaleObject &&
        arrayOfPhotoLinkGrid.map((obj,idx)=>{
          return(
            <Li key={idx}>
              <StyledLink to={obj.knowledgeLink}>
                <Box
                  photo={obj.photo}
                  name={obj.Name }
                />
              </StyledLink>
            </Li>
          )
        })
      }
      {
          props.fromMyAccount &&
        arrayOfPhotoLinkGrid.slice(0,10).map((obj,idx)=>{
          return(
            <Li key={idx}>
              <StyledLink to={obj.shopLink}>
                <Box
                  photo={obj.photo}
                  name={obj.Name}
                />
              </StyledLink>
            </Li>
          )
        })
      }
      </NoMPUl>
  )
}
PhotoLinkGrid.propTypes = {
}
export default PhotoLinkGrid;
