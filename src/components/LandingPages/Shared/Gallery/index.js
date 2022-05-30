import React from 'react';
import Div from 'shared/Div';
import Gallery from 'react-grid-gallery';
import styled from 'styled-components';


const funcC0mp = (props) =>{
  const ControlDiv= styled(Div)`
  display: block;
    @media only screen and (min-width: 996px) {
      display: none;
    }
  `
  const ControlDiv2 = styled(Div)`
  display: none;

    @media only screen and (min-width: 996px) {
    display: block;
    }
  `
  // -----
  var IMAGES_0 =
  [{
          src: props.array[0],
          thumbnail: props.array[0],
          thumbnailWidth: 300,
          thumbnailHeight: 300,
  },
  {
          src: props.array[1],
          thumbnail: props.array[1],
          thumbnailWidth: 150,
          thumbnailHeight: 150,
  },

  {
          src: props.array[2],
          thumbnail: props.array[2],
          thumbnailWidth: 150,
          thumbnailHeight: 150
  },
  {
          src: props.array[3],
          thumbnail: props.array[3],
          thumbnailWidth: 320,
          thumbnailHeight: 174,

  },
  {
          src: props.array[4],
          thumbnail: props.array[4],
          thumbnailWidth: 320,
          thumbnailHeight: 212,
  },

  {
          src: props.array[5],
          thumbnail: props.array[5],
          thumbnailWidth: 320,
          thumbnailHeight: 212
  },
  {
          src: props.array[6],
          thumbnail: props.array[6],
          thumbnailWidth: 150,
          thumbnailHeight: 150,

  },
  {
          src: props.array[7],
          thumbnail: props.array[7],
          thumbnailWidth: 320,
          thumbnailHeight: 212,
  },

  {
          src: props.array[8],
          thumbnail: props.array[8],
          thumbnailWidth: 320,
          thumbnailHeight: 212
  },
  {
          src: props.array[9],
          thumbnail: props.array[9],
          thumbnailWidth: 320,
          thumbnailHeight: 174,

  },
  {
          src: props.array[10],
          thumbnail: props.array[10],
          thumbnailWidth: 320,
          thumbnailHeight: 212,
  },

  {
          src: props.array[11],
          thumbnail: props.array[11],
          thumbnailWidth: 320,
          thumbnailHeight: 212
  },
  {
          src: props.array[12],
          thumbnail: props.array[12],
          thumbnailWidth: 320,
          thumbnailHeight: 174,

  },
  {
          src: props.array[13],
          thumbnail: props.array[13],
          thumbnailWidth: 320,
          thumbnailHeight: 212,
  },

  ]
  var IMAGES =
  [{
          src: props.array[0],
          thumbnail: props.array[0],
          thumbnailWidth: 150,
          thumbnailHeight: 150,
  },
  {
          src: props.array[1],
          thumbnail: props.array[1],
          thumbnailWidth: 150,
          thumbnailHeight: 150,
  },

  {
          src: props.array[2],
          thumbnail: props.array[2],
          thumbnailWidth: 150,
          thumbnailHeight: 150
  },
  {
          src: props.array[3],
          thumbnail: props.array[3],
          thumbnailWidth: 150,
          thumbnailHeight: 150,

  },
  {
          src: props.array[4],
          thumbnail: props.array[4],
          thumbnailWidth: 150,
          thumbnailHeight: 150,
  },

  {
          src: props.array[5],
          thumbnail: props.array[5],
          thumbnailWidth: 150,
          thumbnailHeight: 150
  },
  {
          src: props.array[6],
          thumbnail: props.array[6],
          thumbnailWidth: 150,
          thumbnailHeight: 150,

  },
  {
          src: props.array[7],
          thumbnail: props.array[7],
          thumbnailWidth: 150,
          thumbnailHeight: 150,
  },

  {
          src: props.array[8],
          thumbnail: props.array[8],
          thumbnailWidth: 150,
          thumbnailHeight: 150
  },
  {
          src: props.array[9],
          thumbnail: props.array[9],
          thumbnailWidth: 150,
          thumbnailHeight: 150,

  },
  {
          src: props.array[10],
          thumbnail: props.array[10],
          thumbnailWidth: 150,
          thumbnailHeight: 150,
  },

  {
          src: props.array[11],
          thumbnail: props.array[11],
          thumbnailWidth: 150,
          thumbnailHeight: 150
  },
  {
          src: props.array[12],
          thumbnail: props.array[12],
          thumbnailWidth: 150,
          thumbnailHeight: 150,

  },
  {
          src: props.array[13],
          thumbnail: props.array[13],
          thumbnailWidth: 150,
          thumbnailHeight: 150,
  },

  ]
  return (
    <Div >
      <ControlDiv>
        <Gallery
          images={IMAGES}
        />
      </ControlDiv>
      <ControlDiv2>
        <Gallery
          images={IMAGES}

        />
      </ControlDiv2>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
