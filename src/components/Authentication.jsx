import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Authentication = ({children}) => {
    const {user} = useSelector((state)=>state.user)
    console.log(user)
  if(Object.keys(user).length===0){
    return <Navigate to={"/signin"}/>
  }
  else{
    return children
  }
}

export default Authentication
