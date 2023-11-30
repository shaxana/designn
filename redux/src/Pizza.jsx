import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { addIngredient,  isGluten,deleteIngredient } from './slice'

function Pizza() {
    const inpRef = useRef("")
    const ingredient = useSelector((state) => state.ingredients.value)
    const isGluten = useSelector((state) => state.ingredients.isGluten)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Pizza</h1>
            <p>{isGluten ? "true" : "false"}</p>
            {

                ingredient.map((ingr) => {
                    return  (<div key={ingr.id}><p >{ingr.title}</p>
                    <button>remove</button></div>) 
                })
            }

            <input type="text" ref={inpRef} />
            <button onClick={(e) => {
                e.preventDefault()
                if( ingredient.find((value)=>value == inpRef.current.value)) {
                    alert("This ingredient added")
                }{dispatch(addIngredient(inpRef.current.value)) }
                // dispatch(addIngredient(inpRef.current.value))
                console.log(inpRef);
            }}>add</button>
            {/* <button onClick={()=> dispatch(Addpepperoni("pepperoni"))}>Add Pepperoni</button>
    <button onClick={()=>dispatch(anchovies("anchovies"))}>Add Anchovies</button>
    <button onClick={()=> dispatch(olive("olive"))}>Add Olives</button> */}
            <button onClick={() => {
                dispatch(isGluten(true))
                console.log(ingredient.isGluten);
            }}>Toggle Gluten</button>
        </>
    )
}

export default Pizza