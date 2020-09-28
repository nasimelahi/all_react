import React, { Component } from 'react';
import Singlepost from '../src/component/Singlepost';
import Contact from '../src/component/Contact';
import Home from '../src/component/Home';
import Navbar from '../src/component/Navbar';
import NewTodo from './component/NewTodo' 
import Post from '../src/component/Post'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
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
            <Switch>
            <Route exact path='/' component = {Home} />
            <Route path='/Post' exact component = {Post} />
            <Route path='/contact' component = {Contact} />
            <Route path = "/todo" component = { NewTodo }/>
            <Route path= "/:post_id"  component = { Singlepost }/>
            
            </Switch>
           </div>
          </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
