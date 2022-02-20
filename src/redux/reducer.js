// const initState = {
//     filters: {
//         search: '',
//         status: 'All',
//         priority: []
//     },
//     todoList: [
//         { id: 1, name: 'learn yoga', completed: false, priority: 'Medium' },
//         { id: 2, name: 'learn javascript', completed: true, priority: 'High' },
//         { id: 3, name: 'learn redux', completed: false, priority: 'Low' }
//     ]
// }

// const rootReduder = (state = {}, action) => {
//     // switch (action.type) {
//     //     case 'todoList/addTodo':
//     //         return {
//     //             ...state,
//     //             todoList: [
//     //                 ...state.todoList,
//     //                 action.payload
//     //             ]
//     //         }
//     //     case 'filters/searchFilterChange':
//     //         return {
//     //             ...state,
//     //             filters: {
//     //                 ...state.filters,
//     //                 search: action.payload
//     //             }
//     //         }
//     //     default:
//     //         return state;
//     // }
//     return {
//         filters: filtersReduder(state.filters, action),
//         todoList: todoListReduder(state.todoList, action)
//     }
// }
import filtersReduder from "../components/Filters/FilterSlice";
import todoListReduder from "../components/TodoList/TodosSlice";
import { combineReducers } from "redux";

const rootReduder = combineReducers({
    filters: filtersReduder,
    todoList: todoListReduder
})

export default rootReduder;