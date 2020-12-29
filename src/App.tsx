import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


import ImageGetter from './components/ImageGetter';
import RefreshButton from './components/RefreshButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      },
    },
  }),
);

function App() {
  const classes = useStyles();
  const theme = useTheme();

  const [toRefresh, setToRefresh] = useState(false);
  const [fetched, setFetched] = useState(false);

  return (
    <div className="App">
      <div className="App-header">

        <ImageGetter 
          toRefresh={toRefresh}
          setToRefresh={setToRefresh}
          setFetched={setFetched}/>

        <RefreshButton 
          fetched={fetched}
          toRefresh={toRefresh} 
          setToRefresh={setToRefresh} 
          className={classes.fab}
          />

      </div>
    </div>
  );
}

export default App;
