const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');
const userReducer = require('../features/user/userSlice');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();


// helps in replacing redux comine reducer from normal redux
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user:userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store;