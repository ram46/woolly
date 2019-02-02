import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Login from './Login.jsx';
import ShrinkURL from './ShrinkURL.jsx';

function HomeGrid (props) {
  return (
    <div>
      <Grid container spacing={24}>
  
        <Grid item xs={6} sm={3}>
        <p> Hello 1 </p>
        </Grid>

        <Grid item xs={6} sm={3}>
          <p> Hello 2 </p>
        </Grid>

  
        <Grid item xs={6} sm={3}>
        <p> Hello 3 </p>
        <div>
          <ShrinkURL />
        </div>
        </Grid>

        <Grid item xs={6} sm={3}>
        <p> Hello 4 </p>
        <div>
          <Login />
        </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default HomeGrid;