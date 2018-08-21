/*
    Support async redux in action creator
*/

// action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

// maintaining state
class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(action) {
        //this.state = this.reducer(this.state, action)
        if (typeof action === 'function') {
            action(this.dispatch.bind(this))
        } else {
            console.log('received an action:', action.type)
            this.state = this.reducer(this.state, action)
        }
    }
}

const DEFAULT_STATE = { user: {}, contacts: [] }

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state, action) => {
    if (action.type === UPDATE_CONTACT)
        return [...state, action.payload]
    return state
}

const userReducer = (state, action) => {
    if (action.type === UPDATE_USER)
        return merge(state, action.payload)
    if (action.type === UPDATE_CONTACT)
        return merge(state, { prevContact: action.payload })
    return state
}

// Main reducer
// Return a new state, call reducer for each sub state
const reducer = (state, action) => ({
    user: userReducer(state.user, action),
    contacts: contactReducer(state.contacts, action),
})

// action creators
const updateUser = update => ({
    type: UPDATE_USER,
    payload: update,
})

const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact,
})

// async action creator, return a dispatch function
const loginUser = (username, password) => dispatch => {
    dispatch({ type: 'LOG_IN_SENT' })
    login(username, password)
        .then(() => {
            dispatch({ type: 'LOG_IN_SUCCESS' })
        })
        .catch(err => {
            dispatch({ type: 'LOG_IN_REJECTED' })
        })
}


const store = new Store(reducer, DEFAULT_STATE)
store.dispatch(updateUser({ foo: 'foo' }))
store.dispatch(updateUser({ bar: 'bar' }))
store.dispatch(updateUser({ foo: 'baz' }))

store.dispatch(addContact({ name: 'jordan h', number: '1234567890' }))
store.dispatch(addContact({ name: 'jordan h', number: '1234567890' }))
store.dispatch(addContact({ name: 'david m', number: '5050505050' }))

console.log(store.getState())
