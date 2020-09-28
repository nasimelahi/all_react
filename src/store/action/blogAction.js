import Axios from 'axios'

export const blog = () => dispatch => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> {
       dispatch({
           type: 'SHOW',
           payload: res.data
       })
    })
    .catch(err => console.log(err))
}

export const singlepost = id => dispatch => {
    Axios.get(`https://jsonplaceholder.typicode.com/user/${id}`)
    .then(res => {
        dispatch({
            type:'SINGLE',
            payload:{id: res.data.id}
        })
    })
    .catch(error => console.log(error))
}