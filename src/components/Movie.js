import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandedMovie from "./ExpandedMovie";
import omdbApiRequest from "./omdbApiRequest";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isExpanded: false,
      title: '',
      Rated: '',
      Released: '',
      Runtime: '',
      Actors: '',
      Director: '',
      Plot: '',
      Production: ''
    };
  }

  checkBox = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  expandDescription = async () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
    let data = await omdbApiRequest(this.props.movieName, this.props.movieYear)

    this.setState({
      title: data.Title,
      rated: data.Rated,
      released: data.Released,
      runtime: data.Runtime,
      actors: data.Actors,
      director: data.Director,
      plot: data.Plot,
      production: data.Production
    });
  };

  render() {
    
    return (
      <Col md={6}>
        <div className="movie-container" style={styles.container}>
          <div>{this.props.ranking}</div>
          <div onClick={this.checkBox}>
            <Checkbox variant="contained" color="primary" />
          </div>
          <div onClick={this.expandDescription}>{this.props.movieName}</div>
          <div>{this.props.movieYear}</div>
        </div>
        <ExpandedMovie title={this.state.title} rated={this.state.rated} released={this.state.released} runtime={this.state.runtime} actors={this.state.actors} director={this.state.director} plot={this.state.plot} production={this.state.production} />
      </Col>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black"
  }
};

export default Movie;
