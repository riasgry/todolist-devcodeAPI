import React from 'react'

function FormAddList({handleClicked}) {
  return (
    <div className='Form'>
      <div className='form-card'>
        <div className="form-head">
          Tambah List Item
        </div>
        <div className="form-body">
          <label htmlFor="name">NAMA LIST ITEM</label><br />
          <input type="text" /><br />
          <label htmlFor="priority">PERIORITAS</label><br />
          <select name="" id="">
              <option value="">Very High</option>
              <option value="">High</option>
              <option value="">Normal</option>
              <option value="">Low</option>
              <option value="">Very Low</option>
          </select>
                
        </div>
        <div className="form-foot">
          <button>Submit</button>
          <button onClick={handleClicked}>Cancel</button>
        </div>
          
      </div>
    </div>
   
  )
}

export default FormAddList