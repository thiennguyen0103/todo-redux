// ################## Redux core #################
// const initState = [
//     { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
//     { id: 2, name: "learn javascript", completed: true, priority: "High" },
//     { id: 3, name: "learn redux", completed: false, priority: "Low" },
// ];

// const todoListReduder = (state = initState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/toggleTodoStatus":
//             return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
//         default:
//             return state;
//     }
// };

// export default todoListReduder;

// ################### Redux toolkit ##################
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
        { id: 2, name: "learn javascript", completed: true, priority: "High" },
        { id: 3, name: "learn redux", completed: false, priority: "Low" },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            state = state.map(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo);
        }
    }
});

export default todosSlice;