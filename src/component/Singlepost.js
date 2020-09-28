import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import {singlepost,blog} from '../store/action/blogAction'
import { Link,NavLink } from 'react-router-dom'

class Singlepost extends Component{
    state = {
        user:null
    }
    componentDidMount(){
        this.setState({
            user:this.props.postdata
        })
    }

    render(){
        let output = this.state.user ? (
        <div>
            { this.state.user.name }
        </div>
        ) : 'Loading ...'
        return(
            <div>
               {output}
                
            </div>
            
        )
        
    }
}

const mapStateToProps = (state,ownPops) => {
    const id = parseInt(ownPops.match.params.post_id)
    if(id){
       return{
        postdata: state.blog.users.find( post => post.id === id)
       }
    }
}
export default connect(mapStateToProps)(Singlepost)