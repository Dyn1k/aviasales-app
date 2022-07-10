const initialValue = 'SORT_CHEAP';

const sorting = (state = initialValue, action) => {
  switch (action.type) {
    case 'SORT_CHEAP':
      return 'SORT_CHEAP';

    case 'SORT_FAST':
      return 'SORT_FAST';

    case 'SORT_OPTIMAL':
      return 'SORT_OPTIMAL';

    default:
      return state;
  }
};

export default sorting;
