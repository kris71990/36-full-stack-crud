import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as profileActions from '../../actions/profileActions';
import * as routes from '../../utils/routes';

import autoBind from '../../utils/index';
import ProfileForm from '../profile-form/profile-form';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    autoBind.call(this, Profile);
  }

  handleCreate(profile) {
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      });
  }

  handleUpdate(profile) {
    this.props.profileUpdate(profile);
    this.setState({ editing: false });
  }

  render() {
    const { profile } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null;

    if (profile) {
      JSXEditing = 
        <div>
          <ProfileForm profile={profile} onComplete={this.handleUpdate}/>
          <button onClick={() => this.setState({ editing: false })}>Cancel</button>
        </div>;
      
      JSXDisplay = 
        <div>
          <p>{profile.firstName}</p>
          <button onClick={() => this.setState({ editing: true })}></button>
        </div>;
        
      JSXProfile = 
        <div>
          <p>{profile.firstName}</p>
          <p>{profile.lastName}</p>
          <p>{profile.age}</p>
          <p>{profile.location}</p>
          <p>{profile.breed}</p>
          {this.state.editing ? JSXEditing : JSXDisplay}
        </div>;
    }

    return (
      <div className="profile">
        <h1>Profile</h1>
        {
          profile ? JSXProfile : <ProfileForm onComplete={this.handleCreate}/>
        }
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  profileCreate: PropTypes.func,
  profileUpdate: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(profileActions.createRequestProfile(profile)),
  profileUpdate: profile => dispatch(profileActions.updateRequestProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
