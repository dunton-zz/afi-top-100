import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import Movie from "./Movie";
import SaveButton from "./SaveButton";
import LoginModal from "./LoginModal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: true
    };
  }
  isModal = () => {
    if (this.state.modal) {
      return <LoginModal closeModal={this.closeModal} />;
    } else {
      return null;
    }
  };

  closeModal = () => {
    this.setState({
      modal: false
    });
  };
  render() {
    return (
      <Grid>
        <Row>
          <Movie movieName="Casablanca" movieYear="1942" ranking="1" />
          <Movie movieName="Vertigo" movieYear="1958" ranking="1" />
        </Row>
        <SaveButton />
        {this.isModal()}
      </Grid>
    );
  }
}

export default App;
