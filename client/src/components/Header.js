import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div style={styles.header}>
        <h1>AFI Top 100</h1>
      </div>
    );
  }
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
    padding: "20 0"
  }
};

export default Header;
