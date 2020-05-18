import {createStore,combineReducers} from 'redux'
import authReducer from './reducers/authReducer'

const rootReducers=combineReducers({
    auth: authReducer
})


const appStore=createStore(rootReducers)

export default appStore