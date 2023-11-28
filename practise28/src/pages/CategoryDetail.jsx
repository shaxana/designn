import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function CategoryDetail() {
  const {id} = useParams();
  console.log(id);

let navigate = useNavigate()
  return (
   <>
   
   <div>CategoryDetail</div>
    <button onClick={()=>{
      navigate(-1)
    }}>back</button>
    </>
  )
}

export default CategoryDetail