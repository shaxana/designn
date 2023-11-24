import React, {memo} from 'react'

function TodoItem({elem}) {
  return (
     <li>{elem}</li>
  )
}

export default memo(TodoItem)