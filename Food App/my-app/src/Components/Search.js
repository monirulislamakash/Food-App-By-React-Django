import React from 'react'

export default function Search() {
  return (
    <div className="input-group container mt-3 mb-3">
        <snap className="navbar_burger_menu"><ion-icon name="menu"></ion-icon></snap>
        <input type="text" className="form-control" placeholder='Find your restaurants & cuisines' aria-label="Dollar amount (with dot and two decimal places)"/>
        <span className="input-group-text searchbtn_top"><ion-icon name="search"></ion-icon></span>
    </div>
  )
}
