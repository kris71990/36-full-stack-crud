export const validateDog = (payload) => {
  if (!payload._id) {
    throw new Error('Validation error, no id');
  } 

  if (!payload.firstName || !payload.location) {
    throw new Error('Missing required properties');
  }
};

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'DOGS_FETCH':
      return payload;
    case 'DOG_CREATE':
      validateDog(payload);
      return [payload, ...state];
    case 'DOG_UPDATE':
      validateDog(payload);
      return state.map(dog => (dog._id === payload._id ? payload : dog));
    case 'DOG_DELETE':
      validateDog(payload);
      return state.filter(dog => dog._id !== payload._id);
    default:
      return state;
  }
};
