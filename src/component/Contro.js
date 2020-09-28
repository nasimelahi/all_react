import React from 'react';
import { connect } from 'react-redux'

const Contro = (props) => {

    return(
        <div>
           <div className="row">
               <div className="col-md-5 m-auto">
                <h2>{ props.control }</h2>
                <button onClick = { () => props.add()}>+ ADD</button>
                 <button onClick = { () => props.sub()}>- SUB</button>
               </div>
           </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        control: state.con.count
    }
}
function mapDispatchToProps(dispatch){
    return{
        add: () => {
            dispatch({ type : 'INCRIMENT' , payload:  2 })
        },

        sub : () => {
            dispatch({ type : 'Dic'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contro)