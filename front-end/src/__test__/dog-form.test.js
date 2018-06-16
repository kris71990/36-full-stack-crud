import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure as configureEnzyme, mount } from 'enzyme';
import DogForm from '../components/dog-form/dog-form';

configureEnzyme({ adapter: new Adapter() });

describe('#DogForm', () => {
  test('state should change as values in form change', () => {
    const testName = {
      target: {
        name: 'firstName',
        value: 'fido',
      },
    };

    const testBreed = {
      target: {
        name: 'breed',
        value: 'lab',
      },
    };

    const testAge = {
      target: {
        name: 'age',
        value: '1',
      },
    };

    const testLocation = {
      target: {
        name: 'location',
        value: '98119',
      },
    };

    const testDetails = {
      target: {
        name: 'details',
        value: 'these are details',
      },
    };

    const mountedForm = mount(<DogForm/>);
    mountedForm.find('.dog-form .name').simulate('change', testName);
    mountedForm.find('.dog-form .breed').simulate('change', testBreed);
    mountedForm.find('.dog-form .age').simulate('change', testAge);
    mountedForm.find('.dog-form .location').simulate('change', testLocation);
    mountedForm.find('.dog-form .details').simulate('change', testDetails);

    expect(mountedForm.state().firstName).toEqual('fido');
    expect(mountedForm.state().breed).toEqual('lab');
    expect(mountedForm.state().age).toEqual('1');
    expect(mountedForm.state().location).toEqual('98119');
    expect(mountedForm.state().details).toEqual('these are details');
  });

  test.only('testing onComplete()', () => {
    const mountedForm = mount(<DogForm/>);
    mountedForm.setProps({ onComplete: jest.fn() });
    mountedForm.simulate('submit', { preventDefault: () => {} });
    expect(mountedForm.props.onComplete()).toEqual();
  }); 
});
