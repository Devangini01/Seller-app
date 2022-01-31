const colors = [
  "bg-arielle-smile",
  "bg-c-blue",
  "bg-c-green",
  "bg-c-yellow",
  "bg-c-pink",
  "bg-happy-itmeo",
];

const stores1 = [
  {
    id: "1st",
    name: "Wonder Woman",
    views: "12",
    icon: "fa fa-cart-plus f-left",
  },
  {
    id: "2nd",
    name: "Poison Ivy",
    views: "10",
    icon : "fa fa-rocket f-left",
  },
  {
    id: "3rd",
    name: "Black Canary",
    views: "6",
    icon: "fa fa-rocket f-left",
  },
].map((st, col) => {
  st.color = colors[col % colors.length];
  return st;
});




const data1 = [
  {
     heading : "Total Ads published",
     count : "45",
     icon : "pe-7s-credit",
     color: "flat-color-1",
  },
  {
    heading : "Total Views",
    count : "45",
    icon : "pe-7s-users",
    color: "flat-color-2",
  },
  {
    heading : "Total Coupons",
    count : "45",
    icon : "pe-7s-gift",
    color: "flat-color-3",
  },
 
]

const data2 = [
  {
     heading : "Active Ads",
     count : "45",
     icon : "pe-7s-credit",
     color: "flat-color-1",
  },
  
  {
    heading : "Total Coupons",
    count : "45",
    icon : "pe-7s-gift",
    color: "flat-color-3",
  },
 
]



const history = [
  {
      offer: "Buy 1 get 1 free",
     date : "22nd April",
     
      coupons:"5",
    views:"5",

  },
  {
      offer: "Buy 1 get 1 free", 
     date : "22nd April",
     
      coupons:"5",
    views:"5",

  },
  {
      offer: "Buy 1 get 1 free",
     date : "22nd April",
     
      coupons:"5",
   views:"5",

  },
  {
      offer: "Buy 1 get 1 free", 
    date : "22nd April",
     
      coupons:"5",
   views:"5",

  },
  {
      offer: "Buy 1 get 1 free", 
     date : "22nd April",
     
      coupons:"5",
   views:"5",

  },
  {
    offer: "Buy 1 get 1 free", 
  date : "22nd April",
   
    coupons:"5",
    offers : "5",
    amount : "100",

},
{
  offer: "Buy 1 get 1 free", 
 date : "22nd April",
 
  coupons:"5",
  views:"5"

},
{
  offer: "Buy 1 get 1 free", 
 date : "22nd April",
 
  coupons:"5",
  views:"5"

},
{
  offer: "Buy 1 get 1 free", 
 date : "22nd April",
 
  coupons:"5",
 views:"5"

},
{
  offer: "Buy 1 get 1 free", 
date : "22nd April",
 
  coupons:"5",
 views:"5"

},
{
  offer: "Buy 1 get 1 free",
  date:"22nd April",
 
  coupons:"5",
 views:"5"

},
{
  offer: "Buy 1 get 1 free",
date:"22nd April",

coupons:"5",
views:"5",

},

]



const transaction = [
  {
      name: "Monica",
      category : "food",
      store : "MCD",
      date : " 29th March, 21:00:00",
      offers : "Buy 1 get 1 free",
      amount : "100",

  },
  {
      name: "Chandler",
      category : "food",
      store : "MCD",
      date : " 29th March, 21:00:00",
      offers : "Flat 50%",
      amount : "100",

  },
  {
      name: "Rachel",
      category : "food",
      store : "MCD",
      offers: "Buy 1 get 1 free",
      date : " 29th March, 21:00:00",
      amount : "100",

  },
  {
      name: "Ross",
      category : "food",
      store : "MCD",
      offers: "Buy 1 get 1 free",
      date: " 29th March, 21:00:00",
      amount : "100",

  },
  {
      name: "Phoebe",
      category : "food",
      store : "MCD",
      offers: "Buy 1 get 1 free",
     date: " 29th March, 21:00:00",
      amount : "100",

  },
  {
    name: "Joey",
    category : "food",
    store : "MCD",
    offers: "Buy 1 get 1 free",
    date: " 29th March, 21:00:00",
    amount : "100",

},
{
  name: "Monica",
  category : "food",
  store : "MCD",
  offers: "Buy 1 get 1 free",
  date: " 29th March, 21:00:00",
  amount : "100",

},
{
  name: "Chandler",
  category : "food",
  store : "MCD",
  offers: "Buy 1 get 1 free",
  date: " 29th March, 21:00:00",
  amount : "100",

},
{
  name: "Rachel",
  category : "food",
  store : "MCD",
  offers: "Buy 1 get 1 free",
 date: " 29th March, 21:00:00",
  amount : "100",

},
{
  name: "Ross",
  category : "food",
  store : "MCD",
  offers: "Buy 1 get 1 free",
 date: " 29th March, 21:00:00",
  amount : "100",

},
{
  name: "Phoebe",
  category : "food",
  store : "MCD",
  offers: "Buy 1 get 1 free",
 date: " 29th March, 21:00:00",
  amount : "100",

},
{
name: "Joey",
category : "food",
store : "MCD",
offers: "Buy 1 get 1 free",
date: " 29th March, 21:00:00",
amount : "100",

},

]


const content = [
  {
    name: "Monica",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    date: "4th Jan",
    date2: "10th jan",
    coupons: "6",
    views: "6",
  },
  {
    name: "Chandler",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    date: "4th Jan",
    date2: "10th jan",
    coupons: "6",
    views: "6",
  },
  {
    name: "Rachel",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    date: "4th Jan",
    date2: "10th jan",
    coupons: "6",
    views: "6",
  },
  {
    name: "Ross",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    date: "4th Jan",
    date2: "10th jan",
    coupons: "6",
    views: "6",
  },
];

const storetable = [
  {
      name: "MCD",
      category : "food",
      ads : "5",
      coupons : "6",
      views : "6",

  },
  {
      name: "Mango",
      category : "food",
      ads : "5",
      coupons : "6",
      views : "6",

  },
  {
      name: "MCD",
      category : "food",
      ads : "5",
      coupons : "6",
      views : "6",

  },
  {
      name: "MCD",
      category : "food",
      ads : "5",
      coupons : "6",
      views : "6",

  },
  {
      name: "Dominos",
      category : "food",
      ads : "5",
      coupons : "6",
      views : "6",

  },
  {
    name: "KFC",
    category : "food",
    ads : "5",
    coupons : "6",
    views : "6",

},
{
  name: "MCD",
  category : "food",
  ads : "5",
  coupons : "6",
  views : "6",

},
{
  name: "MCD",
  category : "food",
  ads : "5",
  coupons : "6",
  views : "6",

},
{
  name: "DOminos",
  category : "food",
  ads : "5",
  coupons : "6",
  views : "6",

},
{
  name: "MCD",
  category : "food",
  ads : "5",
  coupons : "6",
  views : "6",

},
{
  name: "MCD",
  category : "food",
  ads : "5",
  coupons : "6",
  views : "6",

},
{
name: "KFC",
category : "food",
ads : "5",
coupons : "6",
views : "6",

},
]


const insi = [
  {
     heading : "Total Ads",
     count : "45",
    
  },
  {
    heading : "Total Views",
    count : "45",
   
  },
  {
    heading : "Total Coupons",
    count : "45",
  
  },
 
]

const tdinsitd = [
  {
     heading : "Active Ads",
     count : "45",
    
  },
  
  {
    heading : "Total Coupons",
    count : "45",
  
  },
 
]


const content1 = [
  {
    info:"Buy one get one free",
     caption:"Quisque id elit maximus, pretium diam at mollis elit",
    desc:" On sweets",
    pro1:"Published On",
    date1:"1st Feb",
    pro2:"Valid Till",
    date2:"3rd Feb",
    pro3:"Views",
    pro4:"Coupons",
    count:"5",
  },
  {
    info:"Buy one get one free",
     caption:"Quisque id elit maximus, pretium diam at mollis elit",
    desc:" On sweets",
    pro1:"Published On",
    date1:"1st Feb",
    pro2:"Valid Till",
    date2:"3rd Feb",
    pro3:"Views",
    pro4:"Coupons",
    count:"5",
   
  },
  {
    info:"Buy one get one free",
    caption:"Quisque id elit maximus, pretium diam at mollis elit",
   desc:" On sweets",
   pro1:"Published On",
   date1:"1st Feb",
   pro2:"Valid Till",
   date2:"3rd Feb",
   pro3:"Views",
   pro4:"Coupons",
   count:"5",
  
  },
  {
    info:"Buy one get one free",
     caption:"Quisque id elit maximus, pretium diam at mollis elit",
    desc:" On sweets",
    pro1:"Published On",
    date1:"1st Feb",
    pro2:"Valid Till",
    date2:"3rd Feb",
    pro3:"Views",
    pro4:"Coupons",
    count:"5",
  },
 
]
export default {stores1,data1,data2,history,transaction,content,content1,storetable,insi,tdinsitd};
