import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, getProducts } from '../JS/Actions/contactAction'
import UserCard from './UserCard'
import "./components.css"

export default function UserList() {
    const products = useSelector((state)=> state.contactReducer.products)
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(getProducts())},[dispatch])
    
    console.log(products)
    
  return (
    <div className='gridBox'>
      {products.map((product)=> <UserCard product={product}/>)}
    </div>
  )
}
