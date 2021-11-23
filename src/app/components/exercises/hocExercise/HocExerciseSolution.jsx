import React from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'
import SimpleComponent from './SimpleComponent'
import withAuth from './withAuth'

const HocExerciseSolution = () => {
   const ComponentWithAuth = withAuth(SimpleComponent)

   return (
      <div>
         <CardWrapper>
            <SmallTitle>Simple Component</SmallTitle>
            <Divider />
            <ComponentWithAuth />
         </CardWrapper>
      </div>
   )
}

export default HocExerciseSolution