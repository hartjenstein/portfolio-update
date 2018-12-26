// PortfoliItems Reducer

const portfolioItemsReducerDefaultState = [];
export default (state = portfolioItemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PORTFOLIOITEM': 
        //use concat instead of push to avoid mutating the array
        // here we use array destructuring and the rest operator
          return [...state, action.portfolioItem];
        case 'REMOVE_PORTFOLIOITEM': 
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PORTFOLIOITEM': 
            return state.map((portfolioItem) => {
                if (portfolioItem.id === action.id) {
                    return {...portfolioItem,
                        ...action.updates
                    };
                } else {
                    return portfolioItem
                }
            });
        case 'SET_PORTFOLIOITEMS': 
            return action.portfolioItems;
        default: 
            return state;
    }
};
