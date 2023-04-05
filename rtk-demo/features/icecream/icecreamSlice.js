
const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');


// step 3
const initialState = {
    numOfIcecream: 20
}


// step 2 
const iceCreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--
        },
        restocked: (state, action) => {
            state.numOfIcecream = state.numOfIcecream + action.payload
        },
    },

    //extra reducer added like if they order a cake an icecream free so from the store it has to get subtracted(cake action is the reducer action of cake)
    // not only the cake is decremented by 1 but also the icecream 
    
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecream--
        })
    }
})

module.exports = iceCreamSlice.reducer

module.exports.icecreamActions = iceCreamSlice.actions 