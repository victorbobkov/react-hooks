import React from 'react'
import PropTypes from 'prop-types'
import CardWrapper from '../common/Card'

const ListComponent = ({children}) => {
   return (
      <ol>
         {React.Children.map(children, (child) => {
            return (
               <li>{child}</li>
            )
         })}
      </ol>
   )
}

ListComponent.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
}

const ChildrenExerciseSolution = () => {
   return (
      <CardWrapper>
         <ListComponent>
            <Component/>
            <Component/>
            <Component/>
         </ListComponent>
      </CardWrapper>
   )
}

const Component = () => {
   return (
      <div>
         Компонент списка
      </div>
   )
}

export default ChildrenExerciseSolution