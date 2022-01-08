import React, { Component } from 'react';
import EditIcon from '@mui/icons-material/Edit';
export default class EditActivity extends Component {
  triggetingEditIcon() {
    this.props.triggetedFromChild();
  }
  render() {
    return (
      <div>
        <EditIcon
          onClick={() => {
            this.triggetingEditIcon();
          }}
        ></EditIcon>
      </div>
    );
  }
}
