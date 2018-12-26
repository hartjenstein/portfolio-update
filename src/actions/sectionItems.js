import uuid from 'uuid';
import database from '../firebase/firebase';

export const addPortfolioItem = (portfolioItem) => ({
	type: 'ADD_PORTFOLIOITEM',
	portfolioItem
});

export const startAddPortfolioItem = (itemData = {}) => {
	return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { headline = '', description = '', link = '', features = [] } = itemData;
    const portfolioItem = { headline, description, link, features };
		return database.ref(`/portfolioItems/`)
			.push(portfolioItem)
			.then((ref) => {
				dispatch(addPortfolioItem({
					id: ref.key,
					...portfolioItem
				}));
		});
	};
};

// REMOVE_ITEM
export const removePortfolioItem = ({ id } = {}) => ({
	type: 'REMOVE_PORTFOLIOITEM',
	id
});

// EDIT_ITEM
export const editPortfolioItem = (id, updates) => ({
	type: 'EDIT_PORTFOLIOITEM',
	id,
	updates
});

export const startEditPortfolioItem = (id, updates) => {
	return (dispatch, getState) => {
		return database.ref(`/portfolioItems/${id}`)
			.update({
				...updates
			})
			.then(() => {
				dispatch(editPortfolioItem(id, updates))
			});
	};
};

// SET_ITEMS
export const setPortfolioItems = (portfolioItems) => ({
	type: 'SET_PORTFOLIOITEMS',
	portfolioItems
});

//Async function to handle firebase set data
export const startSetPortfolioItems = () => {
 
	// dispatch / getState arguement is provided internally from thunk middleware 
	return (dispatch, getState) => {
    const uid = getState().auth.uid;
		return database.ref(`/portfolioItems`)
			.once('value')
			.then((snapshot) => {
				const portfolioItems = [];
				snapshot.forEach((childSnapshot) => {
					portfolioItems.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});
				dispatch(setPortfolioItems(portfolioItems));
			});
	}
};
// Listen to Change on Database
/* export const listenToChange = () => {
	
	return (dispatch, getState) => {
		const uid = getState()
			.auth.uid;

		return database.ref(`users/${uid}/portfolioItems`)
			.on('value', snapshot => {
				const portfolioItems = [];
				snapshot.forEach((childSnapshot) => {
					portfolioItems.push({
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});
				setTimeout(() => {
					dispatch(setPortfolioItems(portfolioItems));
				}, 2000);

			});
	}
}; */

export const startRemovePortfolioItem = ({ id } = {}) => {
	return (dispatch, getState) => { // dispatch / gestState arguement gets passed in by redux library / redux thunk middleware
		const uid = getState()
			.auth.uid;
		return database.ref(`/portfolioItems/${id}`)
			.remove()
			.then(() => {
				dispatch(removePortfolioItem({ id }));
			});
	};
};