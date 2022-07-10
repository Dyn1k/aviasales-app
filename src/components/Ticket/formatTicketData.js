// /* eslint-disable */
import { format } from 'date-fns';

export const numberOfTransfers = (quantity) => {
  let result = '';

  switch (quantity) {
    case 1:
      result += '1 пересадка';
      break;
    case 2:
      result += '2 пересадки';
      break;
    case 3:
      result += '3 пересадки';
      break;
    default:
      result += 'Без пересадок';
      break;
  }

  return result;
};

export const formatPrice = (price) =>
  `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р`;

export const formatTravelTime = (time) =>
  `${Math.trunc(time / 60)}ч ${time % 60}м`;

export const formatFlightTime = (date, duration) => {
  const departureTime = format(new Date(date), 'HH:mm');
  const arrivalTime = format(
    new Date(new Date(date).getTime() + duration * 60000),
    'HH:mm'
  );
  return `${departureTime} – ${arrivalTime}`;
};
