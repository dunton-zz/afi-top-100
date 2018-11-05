import React, { Component } from "react";

class SaveButton extends Component {
  render() {
    return (
      <div onClick={this.props.saveInfo} style={styles.saveButton}>
        <div style={styles.saveButton.textContainer}>
          <h4 style={styles.saveButton.textContainer.text}>SAVE</h4>
        </div>
      </div>
    );
  }
}

const styles = {
  saveButton: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    textContainer: {
      backgroundColor: "blue",
      color: "white",
      padding: "5px 20px",
      text: {
        margin: 0
      }
    }
  }
};

export default SaveButton;
