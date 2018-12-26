// Action generators for filters reducer

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
//SORT_BY_ALPHABET
export const sortByAlphabet = () => ({
  type: 'SORT_BY_ALPHABET'
});
