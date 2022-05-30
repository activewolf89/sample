import React from 'react';
import Div from 'shared/Div';
import Gallery from 'react-grid-gallery';
import zero from 'images/CustomerImages/0.jpg'
import one from 'images/CustomerImages/1.jpg'
import two from 'images/CustomerImages/2.jpg'
import three from 'images/CustomerImages/3.jpg'
import four from 'images/CustomerImages/4.jpg'
import five from 'images/CustomerImages/5.jpg'
import six from 'images/CustomerImages/6.jpg'
import seven from 'images/CustomerImages/7.jpg'
import eight from 'images/CustomerImages/8.jpg'
import nine from 'images/CustomerImages/9.jpg'
import ten from 'images/CustomerImages/10.jpg'
import eleven from 'images/CustomerImages/11.jpg'
import twelve from 'images/CustomerImages/12.jpg'
import thirteen from 'images/CustomerImages/13.JPG'
import fourteen from 'images/CustomerImages/14.JPG'
const IMAGES =
[{
        src: zero,
        thumbnail: zero,
        thumbnailWidth: 400,
        thumbnailHeight: 200,
        tags: [{value: "Engagement", title: "Engagement"}, {value: "Wedding", title: "Wedding"}],
        caption: "Penelope in her finest!"
},
{
        src: one,
        thumbnail: one,
        thumbnailWidth: 250,
        thumbnailHeight: 250,
},

{
        src: two,
        thumbnail: two,
        thumbnailWidth: 250,
        thumbnailHeight: 250
},
{
        src: three,
        thumbnail: three,
        thumbnailWidth: 320,
        thumbnailHeight: 174,

},
{
        src: four,
        thumbnail: four,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},

{
        src: five,
        thumbnail: five,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: six,
        thumbnail: six,
        thumbnailWidth: 250,
        thumbnailHeight: 250,

},
{
        src: seven,
        thumbnail: seven,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},

{
        src: eight,
        thumbnail: eight,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: nine,
        thumbnail: nine,
        thumbnailWidth: 320,
        thumbnailHeight: 174,

},
{
        src: ten,
        thumbnail: ten,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},

{
        src: eleven,
        thumbnail: eleven,
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: twelve,
        thumbnail: twelve,
        thumbnailWidth: 320,
        thumbnailHeight: 174,

},
{
        src: thirteen,
        thumbnail: thirteen,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},
{
        src: fourteen,
        thumbnail: fourteen,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
},

]
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Gallery
        images={IMAGES}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
