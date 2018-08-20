## Reference
- Redux - Lecture 9 - CS50's Mobile App Development with React Native
    - https://www.youtube.com/watch?v=_zT8K6R_P7I&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR&index=11


## Redux
- A data management library inspired by Flux
- Single source of truth for data
- State can only be updated by an action that triggers a re-computation
- Updates are made using pure functions
- Action -> Reducer -> Update Store

## Reducer
- Take the previous state and an update and applies the update
- Should be a pure function
- Should be immutable
    - return a new object

## Store
- Responsible for maintaining state
- getState()
- Can only be updated by using dispatch()
- Can add listeners that get invoked when state changes

## Action
- A piece of data that contains the information required to make a state update