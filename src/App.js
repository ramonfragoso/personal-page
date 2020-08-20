import React, { Component } from 'react';
import Header from './components/Header/index';
import Content from './components/Content/index';
import { StyledApp } from './styles';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #app, #app>div {
    font-family: 'Ubuntu', sans-serif;
    height: 100%
}
`
const App = () => {
    return (
      <StyledApp>
        <Header/>
        <Content/>
        <GlobalStyle/>
      </StyledApp>
    );
}

export default App;
