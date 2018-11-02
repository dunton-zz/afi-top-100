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
      beenClicked: false,
      title: '',
      rated: '',
      released: '',
      runtime: '',
      actors: '',
      director: '',
      plot: '',
      production: '',
      poster: ''
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

    if (!this.state.beenClicked) {
      let data = await omdbApiRequest(this.props.movieName, this.props.movieYear)
      this.setState({
        title: data.Title,
        rated: data.Rated,
        released: data.Released,
        runtime: data.Runtime,
        actors: data.Actors,
        director: data.Director,
        plot: data.Plot,
        production: data.Production,
        poster: data.Poster,
        beenClicked: true,
        isExpanded: true
      });

    }
  };

  render() {
    let containerStyle = this.state.isExpanded ? styles.expandedContainer : styles.container;
    return (
      <Col md={6}>
        <div className="movie-container" style={containerStyle}>
          <div>{this.props.ranking}</div>
          <div onClick={this.checkBox}>
            <Checkbox variant="contained" color="primary" />
          </div>
          <div onClick={this.expandDescription}>{this.props.movieName}</div>
          <div>{this.props.movieYear}</div>
        </div>
        <ExpandedMovie expanded={this.state.isExpanded} title={this.state.title} rated={this.state.rated} released={this.state.released} runtime={this.state.runtime} actors={this.state.actors} director={this.state.director} plot={this.state.plot} production={this.state.production} poster={this.state.poster}  />
      </Col>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black",
    padding: '0 10px'
  },
  expandedContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    padding: '0 10px',
  }
};

export default Movie;
