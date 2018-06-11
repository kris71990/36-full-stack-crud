import { validateProfile } from '../utils/index';

export default (state = null, { type, payload }) => {
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
