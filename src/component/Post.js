import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    state = {
        post:[]
    }
    componentDidMount(){
        let did = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ did)
        .then(resonse => {
          this.setState({
            post:resonse.data
          })
        })
        .catch(error => console.log(error))
       
    }
    render(){
        return(
            <div className="col-md-8 m-auto text-center">
               <h1>{this.state.post.title}</h1><br/>
               {this.state.post.body}
            </div>
        )
    }
}
export default Post