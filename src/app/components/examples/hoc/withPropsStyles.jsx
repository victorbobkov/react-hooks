import React from 'react'
import CardWrapper from '../../common/Card'

const WithPropsStyles = (Component) => (props) => {
   return (
      <CardWrapper>
         <Component {...props} name="new Name" />
      </CardWrapper>
   )
}

export default WithPropsStyles