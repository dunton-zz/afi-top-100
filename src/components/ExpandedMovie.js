import React, { Component } from "react";

class ExpandedMovie extends Component {
  render() {
    console.log(this.props)
    return <div style={styles.container}>{this.props.plot}</div>;
  }
}

const styles = {
  container: {
    display: "flex"
  }
};

export default ExpandedMovie;
