import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect,useState} from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

 function Categories() {
  let [categories, setCategories] = useState([])
  useEffect(()=>{
    axios("https://6554d83163cafc694fe7163f.mockapi.io/category").then((res)=>{
      setCategories(res.data)
    })
  },[])
 
  return (
  <>
    <Button>
  <Link to="/categories/add">Add Ctaegory</Link>
 </Button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">ID</TableCell>
            <TableCell align="center">Categories name</TableCell>
            <TableCell align="center">Categories description</TableCell>
            <TableCell align="center">Categories details</TableCell>
          
           
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => {
            return  <TableRow
              key= {uuidv4()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {category.id}
              </TableCell>
              <TableCell align="right">{category.name}</TableCell>
              <TableCell align="right">{category.description}</TableCell>
              <TableCell> <Button>
              <Link to={"/categories/" + category.id}>Detail</Link>
            </Button></TableCell>
            </TableRow>
           
            
 })}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  );
}

export default Categories