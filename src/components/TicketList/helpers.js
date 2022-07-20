import {
  SORT_CHEAP,
  SORT_FAST,
  SORT_OPTIMAL,
  TRANSFERS_ALL,
  TRANSFERS_ONE,
  TRANSFERS_THREE,
  TRANSFERS_TWO,
  TRANSFERS_WITHOUT,
} from '../../actions/actionTypes';

export const sortTickets = (allTickets, sortValue) => {
  switch (sortValue) {
    case SORT_CHEAP: {
      return allTickets.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    case SORT_FAST: {
      return allTickets.sort((a, b) => {
        const aSumDuration = a.segments[0].duration + a.segments[1].duration;
        const bSumDuration = b.segments[0].duration + b.segments[1].duration;
        return aSumDuration > bSumDuration ? 1 : -1;
      });
    }
    case SORT_OPTIMAL: {
      return allTickets.sort((a, b) => {
        const aSumDuration = a.segments[0].duration + a.segments[1].duration;
        const bSumDuration = b.segments[0].duration + b.segments[1].duration;
        return aSumDuration + a.price > bSumDuration + b.price ? 1 : -1;
      });
    }
    default: {
      return allTickets;
    }
  }
};

export const pushSelectedFilters = (filters) => {
  const array = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in filters) {
    if (filters[key]) {
      // eslint-disable-next-line default-case
      switch (key) {
        case TRANSFERS_ALL:
          array.push(100);
          break;
        case TRANSFERS_WITHOUT:
          array.push(0);
          break;
        case TRANSFERS_ONE:
          array.push(1);
          break;
        case TRANSFERS_TWO:
          array.push(2);
          break;
        case TRANSFERS_THREE:
          array.push(3);
          break;
      }
    }
  }
  return array;
};
