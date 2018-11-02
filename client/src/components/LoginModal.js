import React, { Component } from "react";

class LoginModal extends Component {
  render() {
    return (
      <div style={styles.outsideContainer}>
        <div style={styles.insideContainer}>
          <h3>Log in!</h3>
          <p>
            If you don't login then we won't be able to save your AFI Top 100
            watching progress!
          </p>
          <div>Login with Google</div>
          <div>Login with Facebbok</div>
        </div>
      </div>
    );
  }
}

const styles = {
  outsideContainer: {
    backgroundColor: "grey",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "100",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  insideContainer: {
    backgroundColor: "white",
    padding: "20px"
  }
};

export default LoginModal;
