import React, { Component } from "react";

class SaveButton extends Component {
  render() {
    return (
      <div style={styles.saveButton}>
        <h4>SAVE</h4>
      </div>
    );
  }
}

const styles = {
  saveButton: {
    display: "flex",
    justifyContent: "center"
  }
};

export default SaveButton;
