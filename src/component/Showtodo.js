import React from 'react';
import {connect} from 'react-redux';

const Todoshow = ({todos}) => {
    return(
        <div>
           {todos.map(todo => {
               return(
               <h2 key = {todo.id}>{ todo.Todo}</h2>
               )
           })} 
        </div>
   )
   
}

export default Todoshow