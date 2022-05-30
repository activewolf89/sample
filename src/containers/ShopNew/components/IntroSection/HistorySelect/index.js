import React from 'react';
import Div from 'shared/Div';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import completeRing from 'images/SVG/completeRing.svg';
import completeBand from 'images/SVG/completeBand1.svg';
import bracelet from 'images/SVG/bracelet.svg';
import cufflinks from 'images/SVG/cufflinks.svg';
import diamond from 'images/SVG/diamond.svg';
import earring from 'images/SVG/earring.svg';
import necklace from 'images/SVG/necklace.svg';
import watch from 'images/SVG/watch.svg';
import lBand1 from 'images/SVG/lBand1.svg';
import mensBand1 from 'images/SVG/mensBand1.svg';
import engRing from 'images/SVG/engRing.svg';
import Box from './Box';
import QueryMaster from 'containers/QueryMaster';
import InStockOption from './InStockOption'
// -----
var CheckHistoryForActive = function(pathname,arrayOfLink){
  var result = false;
  arrayOfLink.forEach((choice)=>{
    if(pathname.includes(choice)){
      result = true;
    }
  })
  return result;

}
var SendCustomerThroughARide = function(desiredPath,history,goBack){
  const {pathname} = history.location
    if(pathname.includes(desiredPath)){
      history.push(goBack)
    } else {
      history.push(desiredPath)
    }

}
var FindWhichIndexIsSelected = function(pathname,choices){
  var result = -1;
  choices.forEach((choiceArray,idx)=>{
  choiceArray.forEach((choice)=>{
    if(pathname.includes(choice)){
      result = idx;
    }
  })
  })
  return result
}
const funcC0mp = (props) =>{
  const {pathname} = props.history.location
  return (
    <Div  margin = '10px 0 0 0' >

      <Tabs onSelect={()=>{}} selectedIndex={FindWhichIndexIsSelected(pathname,[["engagement-rings","loose-diamonds"],["wedding-bands"],["fine-jewelry"]])}>
        <Div>

          <TabList >
            <Tab
              style={{padding: CheckHistoryForActive(pathname,["engagement-rings","loose-diamond"]) ? "0px":"5px"}}
              onClick={()=>{SendCustomerThroughARide('/shop/bridal/engagement-rings'  ,props.history,'/shop')}}>
              <Box
                name="Bridal"
                jewelPic = {completeRing}
                active={CheckHistoryForActive(pathname,["engagement-rings","loose-diamond"])}
              />
            </Tab>
            <Tab
              style={{padding: CheckHistoryForActive(pathname,["wedding-bands"]) ? "0px":"5px"}}
              onClick={()=>{SendCustomerThroughARide('/shop/wedding-bands' ,props.history,'/shop/wedding-bands')}}>
              <Box
                name="Wedding"
                jewelPic = {completeBand}
                active={CheckHistoryForActive(pathname,["wedding-bands"])}

              />
            </Tab>
            <Tab
              style={{padding: CheckHistoryForActive(pathname,["fine-jewelry"]) ? "0px":"5px"}}
              onClick={()=>{SendCustomerThroughARide('/shop/fine-jewelry' ,props.history,'/shop/fine-jewelry')}}>
              <Box
                name="Jewelry"
                jewelPic = {earring}
                active={CheckHistoryForActive(pathname,["fine-jewelry"])}
              />
            </Tab>
          </TabList>
        </Div>
        <Div>

        </Div>
        <TabPanel>
          <Tabs onSelect={()=>{}} selectedIndex={FindWhichIndexIsSelected(pathname,[["engagement-rings"],["loose-diamonds"]])}>
            <TabList>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/bridal/engagement-rings' + props.history.location.search,props.history,'/shop')}}
                style={{padding: CheckHistoryForActive(pathname,["engagement-rings"]) ? "0px":"5px"}}
              >
                <Box
                  name="Rings"
                  jewelPic = {engRing}
                  active={CheckHistoryForActive(pathname,["engagement-rings"])}
                />
              </Tab>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/bridal/loose-diamonds' + props.history.location.search,props.history,'/shop')}}
                style={{padding: CheckHistoryForActive(pathname,["loose-diamonds"]) ? "0px":"5px"}}
              >
                <Box
                  style={{padding: CheckHistoryForActive(pathname,["loose-diamonds"]) ? "0px":"5px"}}
                  name="Diamonds"
                  jewelPic = {diamond}
                  active={CheckHistoryForActive(pathname,["loose-diamonds"])}
                />
              </Tab>
            </TabList>
            <TabPanel>

              <QueryMaster
                catId={140}
                history={props.history}
              />

            </TabPanel>
            <TabPanel>
              <QueryMaster
                catId={190}
                history={props.history}

              />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs onSelect={()=>{}}   selectedIndex={FindWhichIndexIsSelected(pathname,[["mens-bands"],["ladies-bands"]])}>
            <TabList>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/wedding-bands/mens-bands' + props.history.location.search,props.history,'/shop/wedding-bands')}}
                style={{padding: CheckHistoryForActive(pathname,["mens-bands"]) ? "0px":"5px"}}
              >
                <Box
                  name="Mens"
                  jewelPic = {mensBand1}
                  active={CheckHistoryForActive(pathname,["mens-bands"])}
                />
              </Tab>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/wedding-bands/ladies-bands' + props.history.location.search,props.history,'/shop/wedding-bands')}}
                style={{padding: CheckHistoryForActive(pathname,["ladies-bands"]) ? "0px":"5px"}}
              >
                <Box
                  style={{padding: CheckHistoryForActive(pathname,["ladies-bands"]) ? "0px":"5px"}}
                  name="Ladies"
                  jewelPic = {lBand1}
                  active={CheckHistoryForActive(pathname,["ladies-bands"])}
                />
              </Tab>
            </TabList>
            <TabPanel>
              <QueryMaster
                catId={110}
                history={props.history}
              />
            </TabPanel>
            <TabPanel>
              <QueryMaster
                catId={115}
                history={props.history}

              />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs onSelect={()=>{}} selectedIndex={FindWhichIndexIsSelected(pathname,[["necklace"],["earring"],["fine-ring"],["bracelet"],["watch"],["other"]])}>
            <TabList>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/fine-jewelry/necklace' + props.history.location.search,props.history,'/shop/fine-jewelry')}}
                style={{padding: CheckHistoryForActive(pathname,["necklace"]) ? "0px":"5px"}}
              >
                <Box
                  name="Necklaces"
                  jewelPic = {necklace}
                  active={CheckHistoryForActive(pathname,["necklace"])}
                />
              </Tab>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/fine-jewelry/earring' + props.history.location.search,props.history,'/shop/fine-jewelry')}}
                style={{padding: CheckHistoryForActive(pathname,["earring"]) ? "0px":"5px"}}
              >
                <Box
                  style={{padding: CheckHistoryForActive(pathname,["earring"]) ? "0px":"5px"}}
                  name="Earrings"
                  jewelPic = {earring}
                  active={CheckHistoryForActive(pathname,["earring"])}
                />
              </Tab>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/fine-jewelry/fine-ring' + props.history.location.search,props.history,'/shop/fine-jewelry')}}
                style={{padding: CheckHistoryForActive(pathname,["fine-ring"]) ? "0px":"5px"}}
              >
                <Box
                  style={{padding: CheckHistoryForActive(pathname,["fine-ring"]) ? "0px":"5px"}}
                  name="Rings"
                  jewelPic = {engRing}
                  active={CheckHistoryForActive(pathname,["fine-ring"])}
                />
              </Tab>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/fine-jewelry/bracelet' + props.history.location.search,props.history,'/shop/fine-jewelry')}}
                style={{padding: CheckHistoryForActive(pathname,["bracelet"]) ? "0px":"5px"}}
              >
                <Box
                  style={{padding: CheckHistoryForActive(pathname,["bracelet"]) ? "0px":"5px"}}
                  name="Bracelets"
                  jewelPic = {bracelet}
                  active={CheckHistoryForActive(pathname,["bracelet"])}
                />
              </Tab>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/fine-jewelry/watch' + props.history.location.search,props.history,'/shop/fine-jewelry')}}
                style={{padding: CheckHistoryForActive(pathname,["watch"]) ? "0px":"5px"}}
              >
                <Box
                  style={{padding: CheckHistoryForActive(pathname,["watch"]) ? "0px":"5px"}}
                  name="Watches"
                  jewelPic = {watch}
                  active={CheckHistoryForActive(pathname,["watch"])}
                />
              </Tab>
              <Tab
                onClick={()=>{SendCustomerThroughARide('/shop/fine-jewelry/other' + props.history.location.search,props.history,'/shop/fine-jewelry')}}
                style={{padding: CheckHistoryForActive(pathname,["other"]) ? "0px":"5px"}}
              >
                <Box
                  style={{padding: CheckHistoryForActive(pathname,["other"]) ? "0px":"5px"}}
                  name="Others"
                  jewelPic = {cufflinks}
                  active={CheckHistoryForActive(pathname,["other"])}
                />
              </Tab>
            </TabList>

            <TabPanel>
              <QueryMaster
                catId={165}
                history={props.history}
              />
            </TabPanel>
            <TabPanel>
              <QueryMaster
                catId={150}
                history={props.history}

              />
            </TabPanel>
            <TabPanel>
              <QueryMaster
                catId={130}
                history={props.history}

              />
            </TabPanel>
            <TabPanel>
              <QueryMaster
                catId={170}
                history={props.history}

              />
            </TabPanel>
            <TabPanel>
              <QueryMaster
                catId={500}
                history={props.history}

              />
            </TabPanel>
            <TabPanel>
              <QueryMaster
                history={props.history}
                catId={999}
              />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>

      {
        (pathname === "/shop" || pathname === "/shop/fine-jewelry" || pathname === "/shop/wedding-bands")  &&
        <Div >
          <QueryMaster
            catId={'All'}
          />
        </Div>
      }

    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
