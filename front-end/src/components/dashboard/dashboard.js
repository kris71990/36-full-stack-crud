import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DogForm from '../dog-form/dog-form';
import * as dogActions from '../../actions/dogActions';

import './dashboard.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dogsFetch();
  }

  render() {
    const { 
      dogs, 
      dogCreate, 
      dogUpdate, 
      dogDelete, 
    } = this.props;

    return (
      <div className="dashboard">
        <h3>Add a Dog</h3>
        <DogForm onComplete={dogCreate} buttonText={'Create'}/>
        <div className="body">
          <h2>Dogs Currently Available for Adoption</h2>
          {
            dogs.map((dog) => {
              return (
                  <div key={dog._id}>
                    <h3>Name - {dog.firstName}</h3>
                    <p>Breed - {dog.breed}</p>
                    <p>Age - {dog.age}</p>
                    <p>Location - {dog.location}</p>
                    <p>Details - {dog.details}</p>
                    <DogForm onComplete={dogUpdate} buttonText={'Update'} dog={dog}/>
                    <button className="delete" onClick={() => dogDelete(dog)}>X</button>
                  </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dogs: PropTypes.array,
  dogCreate: PropTypes.func,
  dogUpdate: PropTypes.func,
  dogDelete: PropTypes.func,
  dogsFetch: PropTypes.func,

};

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};

const mapDispatchToProps = dispatch => ({
  dogsFetch: () => dispatch(dogActions.dogsFetchRequest()),
  dogCreate: dog => dispatch(dogActions.dogCreateRequest(dog)),
  dogUpdate: dog => dispatch(dogActions.dogUpdateRequest(dog)),
  dogDelete: dog => dispatch(dogActions.dogDeleteRequest(dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

