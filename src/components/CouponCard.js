import React from 'react'
import './CouponCard.css'
const CouponCard = () => {
  return (
    <div>
      <div className='container'>
        <div className='row  coucard'>
  <div className='col-md-3'>
    <div className="clash-card barbarian">
      <div className="clash-card__image clash-card__image--barbarian">
        {/* <img src="/images/4.jpg" alt="barbarian" /> */}
      </div>
      {/* <div className="clash-card__level clash-card__level--barbarian">Level 4</div> */}
      <div className="clash-card__unit-name">Buy one get one free</div>
      {/* <div className="clash-card__unit-description">
        The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
      </div> */}
      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
        <div className="one-third">
          <div className="stat">20</div>
          <div className="stat-value">Views</div>
        </div>
        <div className="one-third">
          <div className="stat">16</div>
          <div className="stat-value">Coupons</div>
        </div>
        <div className="one-third no-border">
          <div className="stat">11/1/22</div>
          <div className="stat-value">Expired on</div>
        </div>
      </div>
    </div> {/* end clash-card barbarian*/}
  </div> {/* end wrapper */}
  <div className='col-md-3'>
    <div className="clash-card archer">
      <div className="clash-card__image clash-card__image--archer">
        {/* <img src="/images/4.jpg" alt="archer" /> */}
      </div>
      {/* <div className="clash-card__level clash-card__level--archer">Level 5</div> */}
      <div className="clash-card__unit-name">Flat 50%</div>
      {/* <div className="clash-card__unit-description">
        The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.
      </div> */}
      <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
        <div className="one-third">
          <div className="stat">25</div>
          <div className="stat-value">Views</div>
        </div>
        <div className="one-third">
          <div className="stat">24</div>
          <div className="stat-value">Coupons</div>
        </div>
        <div className="one-third no-border">
          <div className="stat">11/1/22</div>
          <div className="stat-value">Expired on</div>
        </div>
      </div>
    </div> {/* end clash-card archer*/}
  </div> {/* end wrapper */}
  
  <div className='col-md-3'>
    <div className="clash-card goblin">
      <div className="clash-card__image clash-card__image--goblin">
        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png" alt="goblin" /> */}
      </div>
      {/* <div className="clash-card__level clash-card__level--goblin">Level 5</div> */}
      <div className="clash-card__unit-name">Flat 40%</div>
      {/* <div className="clash-card__unit-description">
        These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.
      </div> */}
      <div className="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
        <div className="one-third">
          <div className="stat">30</div>
          <div className="stat-value">Views</div>
        </div>
        <div className="one-third">
          <div className="stat">32</div>
          <div className="stat-value">Coupons</div>
        </div>
        <div className="one-third no-border">
          <div className="stat">11/1/22</div>
          <div className="stat-value">Expired on</div>
        </div>
      </div>
    </div> {/* end clash-card goblin*/}
  </div> {/* end wrapper */}
  <div className='col-md-3'>
    <div className="clash-card wizard">
      <div className="clash-card__image clash-card__image--wizard">
        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png" alt="wizard" /> */}
      </div>
      {/* <div className="clash-card__level clash-card__level--wizard">Level 6</div> */}
      <div className="clash-card__unit-name">Flat 30%</div>
      {/* <div className="clash-card__unit-description">
        The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!
      </div> */}
      <div className="clash-card__unit-stats clash-card__unit-stats--wizard clearfix">
        <div className="one-third">
          <div className="stat">5</div>
          <div className="stat-value">Views</div>
        </div>
        <div className="one-third">
          <div className="stat">16</div>
          <div className="stat-value">Coupons</div>
        </div>
        <div className="one-third no-border">
          <div className="stat">11/1/22</div>
          <div className="stat-value">Expired on</div>
        </div>
      </div>
    </div> {/* end clash-card wizard*/}
  </div> {/* end wrapper */}
</div>

  
      </div>
</div>
    
  )
}

export default CouponCard