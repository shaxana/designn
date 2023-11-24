import React, {memo} from 'react'
import TodoItem from './TodoItem'

function Todos({todos}) {
  return (
    <ul>
        {
            todos && todos.map((elem,i)=>{
                return <TodoItem key={i} elem={elem}/>
            })
        }
    </ul>
  )
}

export default memo(Todos)