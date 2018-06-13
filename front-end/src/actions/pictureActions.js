import superagent from 'superagent';
import * as routes from '../utils/routes';

const createPicture = picture => ({
  type: 'PICTURE_CREATE',
  payload: picture,
});

const createRequestPicture = (file, dog) => (store) => {
  console.log(dog);
  return superagent.post(`${API_URL}${routes.PICTURE_ROUTE}`)
    .send(file)
    .then((response) => {
      return store.dispatch(createPicture(response.body));
    });
};

export { createRequestPicture, createPicture };
