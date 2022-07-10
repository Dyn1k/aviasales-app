/* eslint-disable guard-for-in,no-restricted-syntax,no-case-declarations,no-continue */

const setFlags = (obj, flag) => {
  const newObj = Object.assign(obj);
  for (const key in newObj) {
    newObj[key] = flag;
  }
  return newObj;
};

const checkFlags = (obj) => {
  for (const key in obj) {
    if (key === 'TRANSFERS_ALL') continue;
    if (obj[key] === false) return false;
  }
  return true;
};

const initialValue = {
  TRANSFERS_ALL: true,
  TRANSFERS_WITHOUT: true,
  TRANSFERS_ONE: true,
  TRANSFERS_TWO: true,
  TRANSFERS_THREE: true,
};

const filter = (state = initialValue, action) => {
  switch (action.type) {
    case 'TRANSFERS_ALL': {
      const newObj = setFlags(state, !state.TRANSFERS_ALL);
      return { TRANSFERS_ALL: !state.TRANSFERS_ALL, ...newObj };
    }

    case 'TRANSFERS_WITHOUT': {
      const newObj = {
        ...state,
        TRANSFERS_WITHOUT: !state.TRANSFERS_WITHOUT,
      };
      return {
        ...newObj,
        TRANSFERS_ALL: checkFlags(newObj),
      };
    }

    case 'TRANSFERS_ONE': {
      const newObj = {
        ...state,
        TRANSFERS_ONE: !state.TRANSFERS_ONE,
      };
      return {
        ...newObj,
        TRANSFERS_ALL: checkFlags(newObj),
      };
    }

    case 'TRANSFERS_TWO': {
      const newObj = {
        ...state,
        TRANSFERS_TWO: !state.TRANSFERS_TWO,
      };
      return {
        ...newObj,
        TRANSFERS_ALL: checkFlags(newObj),
      };
    }

    case 'TRANSFERS_THREE': {
      const newObj = {
        ...state,
        TRANSFERS_THREE: !state.TRANSFERS_THREE,
      };
      return {
        ...newObj,
        TRANSFERS_ALL: checkFlags(newObj),
      };
    }

    default: {
      return state;
    }
  }
};

export default filter;
