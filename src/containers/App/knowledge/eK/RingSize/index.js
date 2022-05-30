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
Finding the perfect ring-size is as much an art as a science, due to many factors such as knuckle size, current temperature, salt from food-intake, and other factors can influence what size one’s ring is.  The best and most accurate way to get a ring-size is to measure the finger with a ring-sizer by a professional prior to the ring being made, however if that is unattainable there are ways to get close.  A few questions to ask yourself:
`,
list: [
  {title:'Question 1',
  description:`“Based off one of my fingers, such as my pinky, what does my finger measure compared to the finger needing a size?” – if you can answer this, try and go about a half-size larger than you think as its better to size bigger and then get the ring sized-down.`
},
{title:'Question 2',
description: `
  “Does she already have a ring I can measure, and if so what hand/finger is it for?” – If you can answer this, it gives a general range of what the ring-fingers could be and will help narrow the ring-size down.
`
},
{title:'Question 3',
description:`
  “Is the largest part of her finger the knuckle or the base of the finger?” – If the answer is knuckle, take that into consideration when narrowing down the ring-size, what it could mean for how top-heavy the ring will be, as sliding back-and-forth is one of the issues with knuckles.
`
},
],
summary: 'We suggest to come in anytime, and we will be discreet with finding the ring-size, show alternative pieces such as fine jewelry, and we will document the style interested along with ring-size for your future-use.'
  },
]
