
/*
    Involove action
*/
const merge = (prev, next) => {
    return Object.assign({}, prev, next)
}

const contactReducer = (state, newContact) => {
    return [...state, newContact];
}

const userReducer = (state, update) => {
    return merge(state, update);
}

const reducer = (state, action) => {
    if (action.type === 'UPDATE_USER') {
        return merge(state, { user: userReducer(state.user, action.payload) });
    }
    else if (action.type === 'UPDATE_CONTACT') {
        return merge(state, { contacts: contactReducer(state.contacts, action.payload) });
    }
    return state;
}

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

// store.dispatch({ type: 'UPDATE_USER', payload: { bar: 'bar' } });
// Using cation creator
const updateUser = update => ({
    type: 'UPDATE_USER',
    payload: update
})
store.dispatch(updateUser({ foo: "foo" }));

// Using cation creator
//store.dispatch({ type: 'UPDATE_CONTACT', payload: { name: 'ben', number:'123' }});

const addCountact = newContact => ({
    type: 'UPDATE_CONTACT',
    payload: newContact
})
store.dispatch(addCountact({ name: 'ben', number: '123' }));

console.log(store.getState());