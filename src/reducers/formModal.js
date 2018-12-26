const formModalDefaultState = {
  modalState: undefined
};
export default (state = formModalDefaultState, action) => {
  switch (action.type) {
    case 'ACTIVATE_MODAL':
      return {
        modalState: 'on'
      };
    case 'DEACTIVATE_MODAL':
      return {
        modalState: undefined
      };
    default: 
      return state;
  }
};