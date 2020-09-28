import React,{ useState }from 'react';
import {connect} from 'react-redux';

const Todoshow = (props) => {
    const [isedit, setEdit] = useState(false)

    const changecondition = () =>{
        setEdit(!false)
    }

    return(
        <div>
            { props.todos.map(todo => {
                return(
                    <div className=" pt-3 d-flex justify-content-between" 
                        key={todo.id}> 
                        <p>{ isedit ? <input type = "text" value= { todo.todo}/>:  todo.todo   }</p> 
                        <span >
                            <i  class="fas fa-edit" onClick= { () => changecondition()}></i>
                            <i  class="fas fa-trash-alt" onClick={ () => props.del(todo.id) }></i>
                        </span> 
                    </div>
                )}
            
            )}
        </div>
    )
           
   
}

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        del : (id) => {
            dispatch({ type: 'DELETE' , payload: id} )
        },

       
    }

    
}

export default connect(mapStateToProps,mapDispatchToProps)(Todoshow)