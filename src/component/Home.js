import React, { Component } from 'react'
import { connect } from 'react-redux';
import Contro from '../component/Contro'

const Home = (props) => {
    return(
        <div>
            <h1 className="text-center">{ props.count }</h1>
            <Contro/>
        </div>
    )
}

function mapStateToProps(state){
    return{
        count : state.count
    }
};

export default connect(mapStateToProps)(Home)