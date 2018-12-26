// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SORT_BY_ALPHABET':
        return {
            ...state,
            sortBy: 'alphabet'
        };
        default: 
            return state;
    }
}; 