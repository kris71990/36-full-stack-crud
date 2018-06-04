import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DogForm from '../dog-form/dog-form';
import * as dogActions from '../../actions/dogActions';

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
        <h1>Pound Puppy Alert</h1>
        <DogForm onComplete={dogCreate} buttonText={'Create'}/>
        {
          dogs.map((dog) => {
            return (
              <div key={dog._id}>
                <h3>{dog.firstName}</h3>
                <p>{dog.breed}</p>
                <p>{dog.age}</p>
                <p>{dog.location}</p>
                <p>{dog.details}</p>
                <DogForm onComplete={dogUpdate} buttonText={'Update'} dog={dog}/>
                <button onClick={() => dogDelete(dog)}>X</button>
              </div>
            );
          })
        }
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

