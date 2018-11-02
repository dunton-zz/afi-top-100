import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import Movie from "./Movie";
import SaveButton from "./SaveButton";


class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Movie movieName="Casablanca" movieYear="1942" ranking="1" />
          <Movie movieName="Vertigo" movieYear="1958" ranking="1" />
        </Row>
        <SaveButton />
      </Grid>
    );
  }
}

export default App;
