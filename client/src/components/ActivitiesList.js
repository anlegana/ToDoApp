import React, { Component } from 'react';
import '../App.css';
import EditActivity from './EditActivity';
import DeleteActivity from './DeleteActivity';
export default class ActivitiesList extends Component {
  state = {
    activities: [],
  };
  callAPI() {
    fetch('http://localhost:9000/api/activities').then((res) => {
      res.json().then((data) => {
        console.log(data.activities);
        this.setState({ activities: data.activities });
      });
    });
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <ul>
        {this.state.activities.map((activity) => (
          <li key={activity._id} className='activity'>
            {' '}
            <DeleteActivity passingTheid={activity._id} />
            {activity.description}
            {/* https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react */}
            {/* https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs */}
            <EditActivity
              //i can also create a function above render to pass the id and then reference a function
              //created in parent to pass the id
              triggetedFromChild={() => {
                this.props.gettingIdFromEditIcon(activity._id);
              }}
            />
          </li>
        ))}
      </ul>
    );
  }
}
