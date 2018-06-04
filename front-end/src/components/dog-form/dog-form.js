import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = { 
  firstName: '', 
  age: '', 
  breed: '', 
  details: '', 
  location: '', 
  error: null,
};

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.dog ? props.dog : defaultState;
    autoBind.call(this, DogForm);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.dog !== this.props.dog) {
      this.setState(this.props.dog);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onComplete } = this.props;
    const result = onComplete(this.state);
    
    if (result instanceof Promise) {
      result
        .then(() => {
          this.setState(defaultState);
        })
        .catch((error) => {
          console.error('FORM ERROR', error);
          this.setState({ error });
        });
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { buttonText } = this.props;
    return (
      <form className="dog-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={this.state.breed}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Zip Code"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="details"
          placeholder="Details"
          value={this.state.details}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText} dog</button>
      </form>
    );
  }
}

DogForm.propTypes = {
  onComplete: PropTypes.func,
  dog: PropTypes.object,
  buttonText: PropTypes.string,
};

export default DogForm;

