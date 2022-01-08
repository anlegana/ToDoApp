import React, { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// https://www.pluralsight.com/guides/how-to-reference-a-function-in-another-component
// https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
export default class deleteActivity extends Component {
  handleDeleteIcon(id) {
    console.log(id);

    fetch(`http://localhost:9000/api/activity/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //CONVERTING THE RESPONSE TO A JSON SO YOU CAN SEE THE RESPONSE IN CONSOLE
    // .then((response) => response.json())
    // .then((json) => console.log(json));
    window.location.reload();
  }
  render() {
    return (
      //   <div onClick={this.handleDeleteIcon(this.props.passingTheid)}>
      //https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
      //If i use the onclick like this all the ids will be appearing if i use console.log(id)
      //inside handleDeleteIcon
      <div
        onClick={() => {
          this.handleDeleteIcon(this.props.passingTheid);
        }}
      >
        <DeleteIcon></DeleteIcon>
      </div>
    );
  }
}
