import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Showtodo from './Showtodo'



class Todos extends Component{

    constructor (){
        super()
        this.myRef = React.createRef();
    }

    state = {
        Todo: '',
        todos:[
            {  
                id:1,
                Todo:'Hello World'
            }
        ]
    }
    
    changehandel = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submithandel =(e) => {
        e.preventDefault();
        let todo = {id:Date.now(),Todo:this.state.Todo}
        let todos = [...this.state.todos , todo]
        //let todos = newtodos.push(newTodo);
        this.setState({
            todos 
         })
        this.myRef.current.reset();
    }
    render(){
        return(
            <div className = "container">
                <div className="row">
                    <div className="text-center m-auto col-md-5">
                        <form onSubmit = {this.submithandel} ref={ this.myRef}>
                            <div className="form-group">
                                <label htmlFor="Todo">Todo</label>
                                <input type="text" 
                                name= "Todo" 
                                className="form-control"
                                onChange = { this.changehandel}
                                value = { this.state.content}
                                />
                            </div>
                            <button className="btn btn-warning">Submit</button>
                        </form>
                        <Showtodo todos ={ this.state.todos }/>
                    </div>
                </div>
            </div>
        )
        
    }
}

 


export default Todos