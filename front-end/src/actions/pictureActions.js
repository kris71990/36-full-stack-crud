import superagent from 'superagent';
import * as routes from '../utils/routes';

const createPicture = picture => ({
  type: 'PICTURE_CREATE',
  payload: picture,
});

const createRequestPicture = file => (store) => {
  console.log(file);
  return superagent.post(`${API_URL}${routes.PICTURE_ROUTE}`)
    .send(file)
    .then((response) => {
      return store.dispatch(createPicture(response.body));
    });
};

export { createRequestPicture, createPicture };
