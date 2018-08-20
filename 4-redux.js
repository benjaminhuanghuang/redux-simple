/*
    From action.js
*/
const merge = (prev, next) => {
    return Object.assign({}, prev, next)
}

const contactReducer = (state, action) => {
    if(action.type === 'UPDATE_CONTACT')
        return [...state, action.payload];
    return state;
}

const userReducer = (state, action) => {
    if(action.type === 'UPDATE_USER')
        return merge(state, action.payload);
    return state;
}

const reducer = (state, action) => ({
   user: userReducer(state.user, action),
   contacts: contactReducer(state.contacts, action)
})

class Store {
    constructor(reducer, initState) {
        this.reducer = reducer;
        this.state = initState;
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }

}

const DEFATUL_STATE = {
    user: {},
    contacts: []
}

const store = new Store(reducer, DEFATUL_STATE);
console.log(store.getState());

const updateUser = update => ({
    type: 'UPDATE_USER',
    payload: update
})
store.dispatch(updateUser({ foo: "foo" }));

const addCountact = newContact => ({
    type: 'UPDATE_CONTACT',
    payload: newContact
})
store.dispatch(addCountact({ name: 'ben', number: '123' }));

console.log(store.getState());