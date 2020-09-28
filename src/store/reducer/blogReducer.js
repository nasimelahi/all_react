import Axios from "axios"
import { Component } from "react"

const init = {
    users:[]
}

const blogreducer = (state = init, action) => {
    switch (action.type) {
        case 'SHOW' : {
            return {
                ...state,
                users: action.payload
            }
        }
     }
   return state
}

export default blogreducer