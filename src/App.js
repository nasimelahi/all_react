import React, { Component } from 'react';
import Blog from '../src/component/Blog';
import Contact from '../src/component/Contact';
import Home from '../src/component/Home';
import Navbar from '../src/component/Navbar';
import NewTodo from './component/NewTodo' 
import Post from '../src/component/Post'
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/index'

import './App.css';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Provider store={ store }>
          <div className="App">
            <Navbar/>
            <Route exact path='/' component = {Home} />
            <Route path='/blog' component = {Blog} />
            <Route path='/contact' component = {Contact} />
            <Route path= "/:post_id" component = { Post }/>
            <Route path = "/todo" component = { NewTodo }/>
           </div>
          </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
