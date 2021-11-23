import React from 'react'
import PropTypes from 'prop-types'

const SimpleComponent = ({onLogin, onLogout, isAuth}) => {
   return (
      <>
         <button
            onClick={isAuth ? onLogout : onLogin}
            className={`btn btn-${isAuth ? 'danger' : 'primary'}`}
         >
            {isAuth ? 'Выйти из системы' : 'Войти'}
         </button>
      </>
   )
}

SimpleComponent.propTypes = {
   onLogin: PropTypes.func,
   onLogOut: PropTypes.func,
   isAuth: PropTypes.bool
}

export default SimpleComponent