import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import Movie from "./Movie";
import SaveButton from "./SaveButton";
import LoginModal from "./LoginModal";
import Header from "./Header";
import { afiMovies } from "./afiMovies";
//import { RenderMovies } from "./RenderMovies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
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

  renderMovies = afiMovies => {
    return afiMovies.map((movie, i) => (
      <Row key={i}>
        <Movie
          addMovie={this.addMovie}
          movieName={movie.title}
          movieYear={movie.year}
          ranking={i + 1}
        />
      </Row>
    ));
  };

  render() {
    return (
      <Grid>
        <Row>
          <Header />
        </Row>
        {this.renderMovies(afiMovies)}

        <p>You have watched: {this.state.moviesWatched} out of 100</p>
        <SaveButton />
        {this.isModal()}
      </Grid>
    );
  }
}

export default App;
