import { validateProfile } from '../utils/index';

const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE': 
      return null;
    default:
      return state;
  }
};
