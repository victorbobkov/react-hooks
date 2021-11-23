import React, {useRef, useEffect, useState} from 'react'
import CollapseWrapper from '../common/collapse'
import Divider from '../common/divider'

const UseRefExercise = () => {
   const givenBlock = useRef()
   const [state, setState] = useState(false)

   const handleChange = () => {
     setState(!state)
   }

   useEffect(() => {
      const style = givenBlock.current.style
      const block = givenBlock.current

      if (givenBlock.current.clientWidth === 60) {
         style.width = '80px'
         style.height = '150px'
         block.textContent = 'текст'
      } else {
         style.width = '60px'
         style.height = '40px'
         block.textContent = 'блок'
      }
   })

   return (
      <CollapseWrapper title="Упражнение">
         <p className="mt-3">
            У вас есть блок, у которого заданы ширина и высота. Добавьте
            кнопку, при нажатии которой изменятся следующие свойства:
         </p>
         <ul>
            <li>Изменится содержимое блока на &quot;text&quot;</li>
            <li>высота и ширина станут равны 150 и 80 соответственно</li>
         </ul>
         <Divider />
         <div
            ref={givenBlock}
            className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-2"
            style={{
               height: 40,
               width: 60,
               color: 'white'
            }}
         >
            <small>Блок</small>
         </div>
         <button onClick={handleChange} className={'btn btn-primary'}>
            Изменить блок
         </button>
      </CollapseWrapper>
   )
}

export default UseRefExercise
