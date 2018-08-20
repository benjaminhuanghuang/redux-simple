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

store.dispatch({ type: 'UPDATE_USER', payload: { bar: 'bar' } });
store.dispatch({ type: 'UPDATE_CONTACT', payload: { foo: 'foo' } });

console.log(store.getState());