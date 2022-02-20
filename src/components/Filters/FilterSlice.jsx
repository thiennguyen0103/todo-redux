// ################### Redux core ###################
// const initState = {
//     search: "",
//     status: "All",
//     priority: [],
//     };

//     const filtersReduder = (state = initState, action) => {
//     switch (action.type) {
//         case "filters/searchFilterChange":
//             return {
//                 ...state,
//                 search: action.payload,
//             };
//         case "filters/statusFilterChange":
//             return {
//                 ...state,
//                 status: action.payload,
//             };
//         case "filters/prioritiesFilterChange":
//             return {
//                 ...state,
//                 priority: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default filtersReduder;

// ###################### Redux toolkit #######################
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priority: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        prioritiesFilterChange: (state, action) => {
            state.priority = action.payload
        }
    }
});

export default filtersSlice;