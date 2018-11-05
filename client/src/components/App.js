import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import Movie from "./Movie";
import SaveButton from "./SaveButton";
import LoginModal from "./LoginModal";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: true,
      moviesWatched: 0
    };
  }
  isModal = () => {
    if (this.state.modal) {
      return <LoginModal closeModal={this.closeModal} />;
    } else {
      return null;
    }
  };

  addMovie = add => {
    if (add) {
      this.setState({
        moviesWatched: this.state.moviesWatched + 1
      });
    } else {
      this.setState({
        moviesWatched: this.state.moviesWatched - 1
      });
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
          <Header />
        </Row>
        <Row>
          <Movie
            addMovie={this.addMovie}
            movieName="Casablanca"
            movieYear="1942"
            ranking="1"
          />
          <Movie
            addMovie={this.addMovie}
            movieName="Vertigo"
            movieYear="1958"
            ranking="1"
          />
        </Row>
        <SaveButton />
        <p>You have watched: {this.state.moviesWatched} out of 100</p>
        {this.isModal()}
      </Grid>
    );
  }
}

export default App;
