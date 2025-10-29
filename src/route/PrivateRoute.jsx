import React from 'react'
import { Navigate } from 'react-router-dom'
import DetailProduct from '../page/DetailProduct'

const PrivateRoute = ({ authenticate }) => {
  return (
    authenticate ? <DetailProduct></DetailProduct> : <Navigate to={'/login'}></Navigate>
  )
}

export default PrivateRoute
