import AviasalesServices from '../services/AviasalesServices';
import {
  GET_ID,
  GET_TICKETS,
  SHOW_MORE_TICKETS,
  SORT_CHEAP,
  SORT_FAST,
  SORT_OPTIMAL,
  STOP_RECEIVING,
} from './actionTypes';

const aviasalesServices = new AviasalesServices();

export const sortCheap = () => ({ type: SORT_CHEAP });

export const sortFast = () => ({ type: SORT_FAST });

export const sortOptimal = () => ({ type: SORT_OPTIMAL });

export const onToggleFilter = (type) => ({ type });

export const getSearchId = () => (dispatch) => {
  aviasalesServices
    .getSearchId()
    .then((res) => dispatch({ type: GET_ID, payload: res.searchId }));
};

export const stopReceiving = () => ({ type: STOP_RECEIVING });

export const getTickets = (searchId) => (dispatch) => {
  aviasalesServices
    .getTickets(searchId)
    .then((res) => {
      if (res.status === 500) {
        dispatch(getTickets(searchId));
        throw new Error();
      }
      return res.json();
    })
    .then((res) => {
      if (res.stop) {
        dispatch(stopReceiving());
      } else {
        dispatch({ type: GET_TICKETS, payload: res.tickets });
        dispatch(getTickets(searchId));
      }
    })
    .catch(() => {});
};

export const showMoreTickets = () => ({ type: SHOW_MORE_TICKETS });
