import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DogForm from '../dog-form/dog-form';
import * as dogActions from '../../actions/dogActions';

class Dashboard extends React.Component {
  componentDidMount() {
    // this.props.dogsFetch()
  }

  render() {
    const { dogs, dogCreate, dogUpdate, dogDelete } = this.props;
    return(
      <div className="dashboard">
        <h1>Pound Puppy Alert</h1>
        <DogForm onComplete={dogCreate}/>
        {
          dogs.map((dog) => {
            return (
              <div key={dog._id}>
                <h3>{dog.firstName}</h3>
                <p>{dog.breed}</p>
                <p>{dog.age}</p>
                <p>{dog.location}</p>
                <p>{dog.details}</p>
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
};

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};

// const mapDispatchToProps = dispatch => ({

// });

export default Dashboard;

