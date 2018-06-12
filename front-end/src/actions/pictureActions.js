import superagent from 'superagent';
import * as routes from '../utils/routes';

const setPicture = pictures => ({
  type: 'PICTURES_SET',
  payload: pictures,
});

const createPicture = picture => ({
  type: 'PICTURE_CREATE',
  payload: picture,
});

const createRequestPicture = picture => (store) => {
  const { token } = store.getState();
  // if doing for dogs, no token required

  return superagent.post(`${API_URL}/${routes.PICTURE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', picture.description)
    .attach('picture', picture.photo)
    .then((response) => {
      return store.dispatch(createPicture(response.body));
    });
};

export default { createRequestPicture };
