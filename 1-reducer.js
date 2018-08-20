/*
    Reducer takes the previous state and an update and applies the update 
*/

const merge = (prev, next) => {
    return Object.assign({}, prev, next)
}

// const reducer = (state, update) => {
//     return { ...state, ...update }; // merge state and update
// }

// Take the previous state and an update and applies the update
const reducer = (state, update) => {
    return merge(state, update);
}

// Current state
let state = {}

state = reducer(state, { foo: 'foo' });
state = reducer(state, { bar: 'bar' });

console.log(state);