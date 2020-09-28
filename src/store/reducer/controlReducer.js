import * as types from '../action/type';

const init = {
    count : 0,
    count_2: 400
}

const controlReducer = (state = init, action) => {
    switch(action.type){
        case 'INCRIMENT' : {
            return {
                count : state.count + action.payload
            }
        }
        case 'Dic' : {
            return {
                count: state.count - 1
            }
        }

        default : return state
    }
}

export default controlReducer