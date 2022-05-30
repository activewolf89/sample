import React from 'react';
import Div from 'shared/Div';
import { Helmet } from 'react-helmet';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {
        props.categoryNames.includes('engagement-rings') ?

          <Helmet>
            <meta name='Knowledge Center' content="Custom & Designer Engagement Rings|LTDenny" charSet="utf-8" />
            <title>Engagement Rings</title>
            <link rel="canonical" href="http://ltdenny.com/engagement-rings/shop" />
          </Helmet>:
          props.categoryNames.includes('ladies-band') ?

            <Helmet>
              <meta name='Knowledge Center' content="Matching Wedding Bands, Comfort-Fit, Simple Diamond Eternity Ladies Bands|LTDenny" charSet="utf-8" />
              <title>Wedding Bands</title>
              <link rel="canonical" href="http://ltdenny.com/wedding-bands/shop" />
            </Helmet>:
            props.categoryNames.includes('pendant') ?

              <Helmet>
                <meta name='Knowledge Center' content="Jewelry Gifts Ready For Holidays, Special Occasions, And Celebrations|LTDenny" charSet="utf-8" />
                <title>Fine Jewelry</title>
                <link rel="canonical" href="http://ltdenny.com/fine-jewelry/shop" />
              </Helmet>:
              <Helmet>
                <meta name='Knowledge Center' content="Hand-Picked Forevermark Diamonds, Responsibly Sourced, and GIA/AGS|LTDenny" charSet="utf-8" />
                <title>Loose Diamonds</title>
                <link rel="canonical" href="http://ltdenny.com/diamonds/shop/" />
              </Helmet>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
