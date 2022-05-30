// {
//   check: true,
//   title: 'Platinum',
//   catId: '140',
//   matchingEdgeKey: 'ItemMetalType',
//   image: '001-140-00004',
//   matchingEdge:['platinum','plat'],
//   description:'this is a test of the overview for plat wewe',
//   categoryDetails: {
//     'engagement-rings': {
//       catId: '140',
//       image: '001-140-00004',
//       detail: 'testing detail'
//     }
//   }
// },

module.exports = [

  {
    image: '',
    title: 'Ring Size',
    catId: '140',
    matchingEdgeKey: 'ItemSize',
    matchingEdge:['ItemSize'],
    description:`
      Fortunately after the engagement ring, ring-size should be easier to identify because we have the engagement ring size already.  However, depending on what ring you eventually decide on such as a full diamond eternity band, these bands may need to be made a bit looser in order to have room to grow for your finger(about .25 is average).
`,
list: [
  {title:'Advice 1',
  description:`If the band is a surprise, we will normally suggest going half-way, or using one of our stock pieces to use if we have in-stock, or we can always send ring sizers to find out if not a surprise.`
},
{title:'Advice 2',
description: `
  If the bands are going to be stacking(multiple fingers), we would generally make/order the band in .25 size bigger to avoid being too tight when worn together.
`
},
{title:'Advice 3',
description:`
  Figuring out which hand you would like to wear the band on is important, often times we will half a size larger when the hand is worn on the dominant hand, or if a knuckle is larger than the other part of the finger.
`
},
],
summary: 'We suggest to come in anytime, and we will be discreet with finding the ring-size, show alternative pieces such as fine jewelry, and we will document the style interested along with ring-size for your future-use.'
  },
]
