// ###################### Redux core ####################
// import { createStore } from 'redux';

// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

// #################### Redux toolkit ####################
import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/FilterSlice";
import todosSlice from "../components/TodoList/TodosSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer
    }
})

export default store;