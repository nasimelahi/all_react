import React from 'react';
import { connect } from 'react-redux'

const Contro = (props) => {

    return(
        <div>
           <div className="row">
               <div className="col-md-5 m-auto">
                <button onClick = { () => props.add()}>+ ADD</button>
                <button onClick = { () => props.sub()}>- SUB</button>
               </div>
           </div>
        </div>
    )
}

function mapDispactToProps(dispatch){
    return{
        add: () =>{
            dispatch({ type:'ADD'});
        },
        sub: () => {
            dispatch ({ type:'SUB'});
        }
    }
}

export default connect(null,mapDispactToProps)(Contro)