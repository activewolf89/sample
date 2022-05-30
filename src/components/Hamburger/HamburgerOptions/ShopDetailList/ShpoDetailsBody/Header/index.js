import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';
// -----
const funcC0mp = (props) =>{


  var Transport = function(isDetails,history,direction,onHamburgerClick){
    var sendTo = '/'
    var arrayOfPhotoLinkGrid = [
      {littleName:'engagement-rings',knowledgeLink:"/knowledge-center/engagement-rings",catId:140,Name:"Engagement",shopLink:"/engagement-rings/shop"},
      {littleName:'loose-diamonds',knowledgeLink:"/knowledge-center/loose-diamonds",catId:190,Name:"Diamond",shopLink:"/diamonds/shop"},
      {littleName:'ladies-bands',knowledgeLink:"/knowledge-center/ladies-bands",catId:115,Name:"Ladies Bands",shopLink:"/wedding-bands/shop"},
      {littleName:'gents-bands',knowledgeLink:"/knowledge-center/gents-bands",catId:110,Name:"Gents Bands",shopLink:"/wedding-bands/shop/mens-bands"},
      {littleName:'earrings',knowledgeLink:"/knowledge-center/earrings",catId:150,Name:"Earrings",shopLink:"/fine-jewelry/shop/earring"},
      {littleName:'necklaces',knowledgeLink:"/knowledge-center/necklaces",catId:165,Name:"Necklaces",shopLink:"/fine-jewelry/shop/pendant"},
      {littleName:'fine-rings',knowledgeLink:"/knowledge-center/fine-rings",catId:130,Name:"Fashion Rings",shopLink:"/fine-jewelry/shop/fine-ring"},
      {littleName:'bracelets',knowledgeLink:"/knowledge-center/bracelets",catId:170,Name:"Bracelets",shopLink:"/fine-jewelry/shop/bracelet"},
      {littleName:'watches',knowledgeLink:"/knowledge-center/watches",catId:500,Name:"Watches",shopLink:"/fine-jewelry/shop/watch"},
      {littleName:'others',knowledgeLink:"/knowledge-center/other",catId:999,Name:"Other",shopLink:"/fine-jewelry/shop/other"},
      {littleName:'',knowledgeLink:"/knowledge-center/services",catId:'',Name:"Services",shopLink:"/services"},
      {littleName:'',knowledgeLink:"/knowledge-center/designers",catId:'',Name:"Designers",shopLink:'/engagement-rings/shop'},
      {littleName:'',knowledgeLink:"/knowledge-center/who-we-are",catId:'',Name:"About",shopLink:'/about-us'},
    ]

    arrayOfPhotoLinkGrid.forEach((obj)=>{
      if(obj.Name ===isDetails){
        if(direction === 'shopLink'){
          sendTo = obj.shopLink
        } else {
          sendTo = obj.knowledgeLink
        }
      }
    })
    onHamburgerClick()
    history.push(sendTo)
  }
  return (
    <Div display='flex' backgroundColor='white' flexWrap='nowrap' width='100%' >
      {
        (props.isDetails !=="Services" && props.isDetails !=='About' ) ?
          <Div  width='50%' onClick={()=>{props.isShop && Transport(props.isDetails, props.history,'shopLink',props.onHamburgerClick); props.onSwap(true)}}>

            <Button  active={props.isShop}   width='100%'>

              <FontAwesome name='shopping-bag' style={{margin:'0 3px'}} />
              Shop
            </Button>
          </Div>:
          <Div  width='50%' onClick={()=>{ props.onSwap(true)}}>

            <Button  active={props.isShop}   width='100%'>

              <FontAwesome name='circle' style={{margin:'0 3px'}} />
              Actions
            </Button>
          </Div>
      }
      <Div  width='50%' onClick={()=>{!props.isShop && Transport(props.isDetails, props.history,'knowledgeLink',props.onHamburgerClick);props.onSwap(false)}}>
        <Button  active={!props.isShop}   width='100%'>
          <FontAwesome name='book' style={{margin:'0 3px'}} />

          Learn
        </Button>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
