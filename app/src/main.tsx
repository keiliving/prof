import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './header';
import './header.css';
import About from './about';

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header className="header" />
      <Toolbar />
      <Container>
        <About />
      </Container>
    </React.Fragment>
  );
}