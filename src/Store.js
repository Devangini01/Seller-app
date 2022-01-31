import React from 'react'
import TableDialog from './TableDialog'
import './Store.css'

const Store = () => {
  
  return (
    <div className='store'>
      <div className="one" style={{marginTop:100}}>
        <h4>Total Stores : 45</h4>
        
        <TableDialog />
      </div>
    </div>
  )
}

export default Store
