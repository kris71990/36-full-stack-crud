import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = {

};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.profile ? props.profile : defaultState;
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
        <textarea
          name="bio"
          value={this.state.bio}
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
