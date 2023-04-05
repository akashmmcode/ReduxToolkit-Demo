const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes = state.numOfCakes + action.payload
        },
    }
})

module.exports = cakeSlice.reducer

//exports the action creators generated by the createSlice function as a named export called cakeActions. 
// This named export can be imported and used in other parts of the application..
module.exports.cakeActions = cakeSlice.actions 