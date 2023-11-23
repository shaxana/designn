import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Input, textFieldClasses, TextField } from "@mui/material";
import Icon from '@mui/material/Icon';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import styles from './styles/styles.module.css'
import { useState } from "react";
import axios from "axios";
import { TextFields } from "@mui/icons-material";

function App() {
  let [search, setSearch] = useState("")
  let [film, setFilm] = useState([])
  let [year, setYear] = useState("")


  return (
    <>

      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <CameraAltIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>





      <section className={styles.cardSection} >
        <Container>
          <p className={styles.firstHeading}>Album layout</p>
          <p className={styles.secondHeading}>Something short and leading about the collection
            below—its contents, the creator, etc. Make it short
            and sweet, but not too short so folks don't simply
            skip over it entirely.</p>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" value={search} onChange={(e) => {
            setSearch(e.target.value)
          }} />
          <Button variant="outlined" className={styles.buttons} onClick={() => {
            axios(`https://www.omdbapi.com/?s=${search}}&apikey=5048f47b`).then((res) => {
              setFilm(res.data.Search)
            })
          }}>Search</Button>
          {/* <select name="year" value={year} >
            <option value={2008} id={2008}>2008</option>
            <option value={2009} id={2009}>2009</option>
            <option value={2010} id={2010}>2010</option>
            <option value={2011} id={2011}>2011</option>
            <option value={2012} id={2012}>2012</option>
            <option value={2013} id={2013}>2013</option>
            <option value={2014} id={2014}>2014</option>
            <option value={2015} id={2015}>2015</option>
            <option value={2016} id={2016}>2016</option>
            <option value={2017} id={2017}>2017</option>
            <option value={2018} id={2018}>2018</option>
            <option value={2019} id={2019}>2019</option>
            <option value={2020} id={2020}>2020</option>
            <option value={2021} id={2021}>2021</option>
            <option value={2022} id={2022}>2022</option>
            <option value={2023} id={2023}>2023</option>

          </select> */}
        </Container>
      </section>





      
      
<Container >
              <Grid container spacing={4}>
          {
            film && film.map((flm, id) => {

              return   <Grid item xs={4} key={id}>

                <Card sx={{ maxWidth: 345 }}  >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={flm.Poster}

                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {flm.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flm.Actors}

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flm.Year}

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>


             

            })
          }
        </Grid>
</Container>
      









      <footer className={styles.footer}>

        <h2 >Footer</h2>
        <p >Something here to give the footer a purpose!</p>
        <p >Copyright © <a href="http://localhost:3000/">Your Website 2023</a></p>

      </footer>


    </>

  );
}


export default App;
