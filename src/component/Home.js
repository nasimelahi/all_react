import React, { Component } from 'react'
import { connect } from 'react-redux';
import Contro from '../component/Contro'

const Home = (props) => {
    return(
        <div className="text-center">
            <h1 className="text-center"></h1>
            <Contro/>
        </div>
    )
}



export default Home