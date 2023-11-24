import React, { useState, useReducer, useCallback } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'


function reducer(state, action) {
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todo: action.todo
            }
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case "GET_SEARCH":
            return {
                ...state,
                search: action.search
            }


    }
}




function TodoApp() {
    let [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, {
        todo: "",
        todos: [],
        search: ""
    })
    let filteredData = state.todos.filter((elem) => elem.includes(state.search));
    const increment = () => {
        setCount(++count)
    };
    const SET_TODO = useCallback((e) => {
        dispatch({
            todo: e.target.value,
            type: "SET_TODO"
        })
    }, []);

    const GET_SEARCH = (e) => {
        dispatch({
            search: e.target.value,
            type: "GET_SEARCH"
        })
    };
    const ADD_TODO = useCallback(() => {
        dispatch({
            todo: state.todo,
            type: "ADD_TODO"
        })
    }, [state.todo]);




    return (
        <>
            <h1>TodoApp</h1>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increase</button>
            <hr />
            <AddTodo SET_TODO={SET_TODO} ADD_TODO={ADD_TODO} GET_SEARCH={GET_SEARCH} />
            <hr />
            <Todos todos={filteredData} />
            <hr />


        </>
    )
}

export default TodoApp