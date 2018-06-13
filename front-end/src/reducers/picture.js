export const validatePicture = (picture) => {
  if (!picture) throw new Error('No picture was included in request');

  const { 
    _id, description, 
  } = picture;

  if (!_id || !description) {
    throw new Error('Invalid picure properties');
  }
};

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CREATE_PICTURE':
      validatePicture(payload);
      return [payload, ...state];
    case 'TOKEN_REMOVE':
      return [];
    default:
      return state;
  }
};
