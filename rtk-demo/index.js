const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

// console.log('initial state',store.getState());

const unsubscribe = store.subscribe(()=>{})



// calling dispatch with store for cake 
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));


// // calling dispatch with store for icecream 
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(3));



//async function
store.dispatch(fetchUsers());



// dont need for async call
unsubscribe();