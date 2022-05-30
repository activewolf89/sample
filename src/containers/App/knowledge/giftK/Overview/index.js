
var gift2 = require('images/2020Christmas/gift2.jpg')
var gift3 = require('images/2020Christmas/Giftcard.png')
var gift4 = require('images/2020Christmas/GiftWrap.png')
var TreasureChest = require('images/2020Christmas/TreasureChest.jpg')
var BlackLabel = require('images/2020Christmas/BlackLabel.jpg')

module.exports = [

  {

    image: gift2,
    sideNote: "As a side-note, all jewelry will be wrapped by default when purchased either in-store or online through our website, we also provide gift-cards in case, you want to surprise your gift receiver with options",
    sideImages:[gift3,gift4],
    title: 'Holiday Wishes',
    matchingEdge:[],
    description:`
    The holidays are fast approaching, 2020 is coming to an end and it’s time to celebrate! Browse this gift guide for ideas that will light up and sparkle this holiday season. Shop in-store by appointment, online through our website or schedule a virtual appointment.
For the month of December, receive a special 20% discount off full retail price, most items (some exclusions apply).  Use code 2020WISHES to take advantage of the discount online.
Above all else, we hope you and your loved ones are doing well during this challenging time.  We wish you a very happy holiday and a prosperous and healthy new year.
Your Family Jeweler,
-L T Denny
    `,
    list: [
      {
        examples : [
          {title:"Stacking Rings",description: "Stackable rings showcase pieces sitting side-by-side showing off individual preference by combining multiple stackable bands together.  You can also achieve this look with grouping of curvy bands to make a wide look with multiple pieces.",images:["001-130-00494","001-130-03611","001-130-00371"],link:'/shop/fine-jewelry/fine-ring?ItemLength=1.6-2.1'},
          {title:"Stacking Bangles",description: "Stackable bangles offer the same concept as the stacking rings, however layering bracelets or simply having one to start is the beginning of something beautiful! It is also one of the easiest choices to wear since most can be slipped over the hand or easily pulled over the wrist.",images:["001-170-00522","001-170-00526","001-170-00401"],link:'/shop/fine-jewelry/necklace?ItemDetail_7=Diamonds-By-The-Yard'},
          {title:"Diamonds By The Yard",description: "Diamonds by the yard is an assortment of diamonds in sequence depending on your style and preference.  We make these here in-house, and the sky's the limit on what is possible with this layering design.",images:["001-165-01859","001-165-01838","001-165-02000"],link:'/shop/fine-jewelry/necklace?ItemDetail_7=Diamonds-By-The-Yard'},
        ],
        title:'Easy Wearables',
      description:`
        Less is more in today's designing of jewelry as simple classic designs, earring studs, stacking bangle bracelets and rings are desired.
      `
    },
    {
      examples : [
        {title:"Stacking Bands",description: " We love the hammered texture and design of our hand-made 18K yellow-gold band's.  Each band is actually made from our customers recycled metals, and can be grouped together to tell a story.",images:["001-115-02474","001-115-02540","001-115-02483"],link:'/shop/earrings'},
        {title:"Confetti Bands",description: "These bands are from a fantastic new designer we dicovered this year called Dilamani! They are inspired by celebrations which is why this design is called the Confetti style with a multitude of diamonds. ",images:["001-115-02552","001-115-02553","001-115-02554"],link:'/shop?ItemVendorName=Dilamani'},
        {title:"Anniversary",description: "each stone representing a mark of time, these very easily wearable bands are both comfortable with a comfort-fit, and beautiful with individual diamonds representing time!",images:["001-115-02302","001-115-01912","001-115-02228"],link:'/shop/wedding-bands/ladies-bands?ItemVendorName=Memoire'},
      ],
      title:'Bands',
    description:`
    Some bands that can be layered as well as rings are shown below.  Whether its to layer your engagement ring or for a new right-hand stack/standable, we have options for you!
    `
  }
  ]
  },

  {
    image: BlackLabel,
    title: 'Diamonds',
    link: "/shop?sort=low-to-high&?StoneMake=Black%20Label",
    matchingEdge:[],
    description:` Diamonds are in a majority of our jewelry, reason being they are the hardest material on earth and they provide a high polish making them so sparkly! We also carry man-made however that is a topic for another time :).
    `,
    list: [
      {
        examples : [
          {title:"Diamond Studs",description: "Stackable rings showcase pieces sitting side-by-side showing off individual preference by combining multiple stackable bands together.  You can also achieve this look with grouping of curvy bands to make a wide look with multiple pieces.",images:["001-150-02271","001-150-02266","001-150-02272"],link:'/shop/fine-jewelry/earrings?ContainsStones=DIAMOND&?ItemDetail_7=Stud'},
          {title:"Loose Diamonds",description: "Browse our inventory of loose Black Labels, you may find a stone you'd like to remount in your center or pendant.",images:["001-190-00557","001-190-00554","001-190-00558"],link:'/shop/bridal/loose-diamonds'},
        ],
        title:'Black Label ',
      description:`
      Black label diamonds are responsibly sourced diamonds from Foverevermark, aka DeBeers.  This is one of the main types of stones we carry nowadays as the cut is absolutely perfect,
      heart-and-arrows-cut that achieves an ideal-cut.
      `
    },
  ]
},
{
  image: TreasureChest,
  title: '50% Off Select Items',
  link: "/sale",
  matchingEdge:[],
  description:` Go on a treasure hunt and find your next jewel! We've hand-selected pieces to offer at special discounted prices.
  `,
  list: [
    {
      examples : [
        {title:"Browse Our Treasure Chest",description: "Stackable rings showcase pieces sitting side-by-side showing off individual preference by combining multiple stackable bands together.  You can also achieve this look with grouping of curvy bands to make a wide look with multiple pieces.",images:["001-140-01893","001-115-01208","001-150-00013"],link:'/sale'},
      ],
  },
]
},

]
