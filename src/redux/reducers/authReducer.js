import { authAction } from '../actionTypes'

const { signIn, signOut } = authAction

const initialState = {
    email: "",
    userName: "",
    loggetIn: false
}


export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case signIn:
            let { email, userName } = action.payload
            return { ...state, userName, email, loggetIn: true }
        case signOut:
            return { ...state, userName:"", email:"", loggetIn: false }
        default:
            return state
    }
}