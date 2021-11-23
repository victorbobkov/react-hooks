import React, {useEffect, useState} from 'react'
import CardWrapper from '../../common/Card'

const withAuth = (Component) => (props) => {
   const value = 'John Smith'
   const [isAuth, setAuth] = useState()

   useEffect(() => {
      setAuth(localStorage.getItem('user') === value)
   }, [])

   const onLogin = () => {
      localStorage.setItem('user', value)
      setAuth(true)
   }

   const onLogout = () => {
     localStorage.setItem('user', '')
      setAuth(false)
   }

   return (
      <CardWrapper>
         <Component
            {...props}
            onLogin={onLogin}
            onLogout={onLogout}
            isAuth={isAuth}
         />
      </CardWrapper>
   )
}

export default withAuth