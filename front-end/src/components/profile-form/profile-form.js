import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  breed: '',
  age: '',
  location: '',
};

// firstName= lastName= phoneNumber= breed= age= location= account=[account id]

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : defaultState;
    autoBind.call(this, ProfileForm);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className="profile-form" onSubmit={this.handleSubmit}>
        <input 
          name="firstName"
          placeholder="First Name"
          type="text"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input 
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <input 
          name="phoneNumber"
          placeholder="Phone Number - '+15555555555'"
          type="text"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
        />
        <input 
          name="breed"
          placeholder="Breed"
          type="text"
          value={this.state.breed}
          onChange={this.handleChange}
        />
        <input 
          name="location"
          placeholder="Zip Code"
          type="number"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <input 
          name="age"
          placeholder="Age"
          type="number"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <button type="submit">{this.props.profile ? 'update' : 'create'} profile</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};

export default ProfileForm;
