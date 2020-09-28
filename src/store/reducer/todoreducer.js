const init = 
     [
        
       { 
           id:1,
           todo:'learn  React-Redux'
       },
       { 
        id:2,
        todo:'How to send Data form Form'
       }

    ]


const todoreducer = (state = init, action) => {
    switch(action.type){
        case 'ADD_TODO' : {
            let newTodo = action.payload;
            let addtodo = [...state,newTodo]
            return addtodo;
        }
        case 'DELETE' : {
            return state.filter(todo => todo.id != action.payload)
        }
        case 'EDIT' :{
             
        }
        default : return state
    }
}

export default todoreducer