import React from 'react'
import './Seller.css'
// import TDHistory from "./components/TDHistory";
import Adcards from "./components/Adcards";
import Insi from "./components/Insi";
import Profile from "./components/Profile";
import Header2 from './partials/Header2';
// import CouponCard from './components/CouponCard';
import Slider from './components/Slider';
import Pagination from './components/Pagination';

const Seller = () => {
  return (
      <div className='main100'>
        <Header2/>
    <div className="row"  style={{ marginTop: 100 }}>
    <div className="col-md-3" style={{ marginLeft: 50 }}>
      <Profile />
    </div>{" "}
    <div className="col-md-8">
      <div className="one">
        <h4>Insights Till Date</h4>
      </div>
      <div className="row">
        <Insi />
      </div>
    </div>
  </div>


<div className="one">
  <h4>Live Ads</h4>
  <Adcards />
</div>

<div className="one" style={{ marginTop: 20 }}>
  <h4>History</h4>
     <Slider />
</div>

<div className="one" style={{ marginTop: 20 }}>
  <h4>Recent Transaction</h4>
     <Pagination />
</div>
</div>
  )
}

export default Seller