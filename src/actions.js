export const cheap = () => ({ type: 'SORT_CHEAP' });

export const fast = () => ({ type: 'SORT_FAST' });

export const optimal = () => ({ type: 'SORT_OPTIMAL' });

export const onToggleFilter = (type) => ({ type });

export const getSearchId = () => (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => res.json())
    .then((res) => dispatch({ type: 'GET_ID', payload: res.searchId }));
};

export const stopReceiving = () => ({ type: 'STOP_RECEIVING' });

export const getTickets = (searchId) => (dispatch) => {
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
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
        dispatch({ type: 'GET_TICKETS', payload: res.tickets });
        dispatch(getTickets(searchId));
      }
    })
    .catch(() => {});
};

export const showMoreTickets = () => ({ type: 'SHOW_MORE_TICKETS' });
