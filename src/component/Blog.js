import React, { Component } from 'react'
import axios from 'axios'
import { Link,NavLink } from 'react-router-dom'
import Post from './Post'

class Blog extends Component{
    state = {
        posts:[]
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(resonse => {
            this.setState({
              posts:resonse.data
            })
          })
          .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
                { this.state.posts.map(post => {
                    return (
                         <div classname="card-body" key ={ post.id}>
                             <a href={ '/' + post.id} >
                                 <h5 classname="card-title">{ post.title }</h5>
                             </a >
                            <p classname="card-text">{ post.body }</p>
                            
                        </div>
                         )
                })
                }
                
            </div>
            
        )
        
    }
}

export default Blog