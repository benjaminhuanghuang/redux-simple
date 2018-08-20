const merge = (prev, next) => {
    return Object.assign({}, prev, next)
}

// Take the previous state and an update and applies the update
const reducer = (state, update) => {
    return merge(state, update);
}




class Store{
    constructor(reducer, initState){
        this.reducer = reducer;
        this.state = initState;
    }

    getState(){
        return this.state;
    }

    dispatch(update){
        this.state = this.reducer(this.state, update);
    }

}

const store = new Store(reducer, {foo: 'foo'});
console.log(store.getState());

store.dispatch({bar:'bar'});
console.log(store.getState());