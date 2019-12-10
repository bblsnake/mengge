import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux'
import Layout from './Layout';
import logo from './logo.svg';
import './App.css';
// 一切皆组件
// react-router 1. dom 2. native 3. 内存

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Route path='/' component={Layout} />
      </BrowserRouter>
    )
  }
}

export default App;
