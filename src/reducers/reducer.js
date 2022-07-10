import { combineReducers } from 'redux';
import sorting from './sorting';
import filter from './filter';

const searchId = (state = '', action) => {
  if (action.type === 'GET_ID') {
    return action.payload;
  }
  return state;
};

const tickets = (state = [], action) => {
  if (action.type === 'GET_TICKETS') {
    return [...state, ...action.payload];
  }
  return state;
};

const receivingData = (state = true, action) => {
  if (action.type === 'STOP_RECEIVING') return false;
  return state;
};

const displayedTickets = (state = 5, action) => {
  if (action.type === 'SHOW_MORE_TICKETS') {
    return state + 5;
  }
  return state;
};

export default combineReducers({
  sorting,
  filter,
  searchId,
  tickets,
  receivingData,
  displayedTickets,
});
