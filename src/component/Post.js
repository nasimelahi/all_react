import React, { Component } from 'react'
import axios from 'axios'
import { Router, Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {blog , singlepost} from '../store/action/blogAction'
import Singlepost from './Singlepost';


class Post extends Component{
    state = {
        users:[]
    }
    componentDidMount(){
        this.props.blog()
        
        // let did = this.props.match.params.post_id;
        // axios.get('https://jsonplaceholder.typicode.com/posts/'+ did)
        // .then(resonse => {
        //   this.setState({
        //     post:resonse.data
        //   })
        // })
        // .catch(error => console.log(error))
       
    }
    re = (id) => {
         console.log(this.props)
         return(
            <Link> </Link>
        )
    }
    
    render(){
        
        const {users} = this.props.postdata
        return(
            <div>
                {users.map(user => {
                    return(
                       <Link to= {`/${user.id}`}>
                         <div>
                             <h3 >{user.name}</h3> 
                         </div>
                       </Link>
                     )
                })}
                
            </div>
            
        )
    }    
}
const mapStateToProps = (state) => {
    return{
        postdata: state.blog
    }
}
export default connect(mapStateToProps,{blog,singlepost})(Post)