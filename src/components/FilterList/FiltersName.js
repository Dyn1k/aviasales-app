import {
  TRANSFERS_ALL,
  TRANSFERS_ONE,
  TRANSFERS_THREE,
  TRANSFERS_TWO,
  TRANSFERS_WITHOUT,
} from '../../actions/actionTypes';

const FiltersName = [
  {
    label: TRANSFERS_ALL,
    name: 'Все',
  },
  {
    label: TRANSFERS_WITHOUT,
    name: 'Без пересадок',
  },
  {
    label: TRANSFERS_ONE,
    name: '1 пересадка',
  },
  {
    label: TRANSFERS_TWO,
    name: '2 пересадки',
  },
  {
    label: TRANSFERS_THREE,
    name: '3 пересадки',
  },
];

export default FiltersName;
