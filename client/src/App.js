import './App.css';

import { Component } from 'react';
import ActivitiesList from './components/ActivitiesList';

//https://www.geeksforgeeks.org/reactjs-setstate/ USING STATES AND BINDING THE STATE IS A MUST
//https://reactjs.org/docs/react-component.html#constructor WHY TO USE CONSTRUCTOR BEFORE EVERYTHING ESLE

//CONSTRUCTOR SUPER, BIND,HEADERS
class App extends Component {
  constructor(props) {
    super(props);
    console.log(props); // ✅ {}
    console.log(this.props);

    // Set initial state
    this.state = {
      descriptionValue: '',
      EditIconclicked: false,
      idToUpdate: '',
    };

    // Binding this keyword IMPORTANT TO DO THIS STEP
    //--->> IT SEEMS I NEED TO USE BIND EACH TIME I WANT TO USE
    //     THE STATTE IN A FUNCTION<<---
    this.handleChangeActivityDescription =
      this.handleChangeActivityDescription.bind(this);

    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleIdToUpdate = this.handleIdToUpdate.bind(this);
  }
  handleChangeActivityDescription(e) {
    //console.log(e);
    this.setState({ descriptionValue: e.target.value });
    //console.log('en el change method:' + this.state.descriptionValue);
    //   this.handleSubmitClick();
  }

  //https://www.geeksforgeeks.org/get-and-post-method-using-fetch-api/

  handleSubmitClick(e) {
    console.log('this.state.clicked=' + this.state.EditIconclicked);
    if (this.state.EditIconclicked === false) {
      //e.preventDefault(); //otherwise it will refresh the page
      fetch('http://localhost:9000/api/activity/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ description: this.state.descriptionValue }),
      })
        //CONVERTING THE RESPONSE TO A JSON SO YOU CAN SEE THE RESPONSE IN CONSOLE
        .then((response) => response.json())
        .then((json) => console.log(json));
      this.setState({ EditIconclicked: false });
    } else {
      console.log('entre a update fetch');
      fetch(`http://localhost:9000/api/activity/${this.state.idToUpdate}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ description: this.state.descriptionValue }),
      })
        //CONVERTING THE RESPONSE TO A JSON SO YOU CAN SEE THE RESPONSE IN CONSOLE
        .then((response) => response.json())
        .then((json) => console.log(json));
      this.setState({ EditIconclicked: false });
    }
    window.location.reload();
  }

  handleIdToUpdate(id) {
    console.log('entro');
    this.setState({ EditIconclicked: true });
    this.setState({ idToUpdate: id });
  }
  render() {
    return (
      <div className='App'>
        <input
          id='description'
          onChange={this.handleChangeActivityDescription}
        ></input>
        <button
          type='Submit '
          id='submit'
          name='Submit'
          onClick={this.handleSubmitClick}
        >
          Submit
        </button>
        <ActivitiesList gettingIdFromEditIcon={this.handleIdToUpdate} />
      </div>
    );
  }
}

export default App;
