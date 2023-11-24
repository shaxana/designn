import React from 'react'

function AddTodo({SET_TODO,ADD_TODO,GET_SEARCH}) {
  return (
    <>
    
    <input type="text" placeholder='search ' onChange={GET_SEARCH}/>
    <hr />
    <input type="text " onChange={SET_TODO} />
   
    <button onClick={ADD_TODO}>ADD</button>
    </>
  )
}

export default AddTodo