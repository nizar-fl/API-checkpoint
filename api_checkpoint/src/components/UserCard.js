import React from 'react'
import "./components.css"



export default function UserCard({product}) {
    console.log(product)
  return (
    <div className='userBox'>
        <h3>{product.name}</h3>
        <h4>{product.email}</h4>
        <h4>{product.phone}</h4>
        <h5>{product.address.city}</h5>    
    </div>
  )
}
