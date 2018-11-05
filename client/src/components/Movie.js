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
      title: "",
      rated: "",
      released: "",
      runtime: "",
      actors: "",
      director: "",
      plot: "",
      production: "",
      poster: ""
    };
  }

  checkBox = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });

    if (!this.state.isChecked) {
      this.props.addMovie(true);
    } else {
      this.props.addMovie(false);
    }
  };

  expandDescription = async () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });

    if (!this.state.beenClicked) {
      let data = await omdbApiRequest(
        this.props.movieName,
        this.props.movieYear
      );
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
    return (
      <Col md={6}>
        <div style={styles.container}>
          <div style={styles.container.containedItem}>{this.props.ranking}</div>
          <div style={styles.container.containedItem}>
            <Checkbox onClick={this.checkBox} />
          </div>
          <div
            style={styles.container.containedTitle}
            onClick={this.expandDescription}
          >
            {this.props.movieName}
          </div>
          <div style={styles.container.containedYear}>
            {this.props.movieYear}
          </div>
        </div>
        <ExpandedMovie
          expanded={this.state.isExpanded}
          title={this.state.title}
          rated={this.state.rated}
          released={this.state.released}
          runtime={this.state.runtime}
          actors={this.state.actors}
          director={this.state.director}
          plot={this.state.plot}
          production={this.state.production}
          poster={this.state.poster}
        />
      </Col>
    );
  }
}

const styles = {
  container: {
    border: "1px solid black",
    padding: "0 10px",
    containedItem: {
      display: "inline-block",
      width: "25%"
    },
    containedTitle: {
      display: "inline-block",
      width: "40%",
      textAlign: "center"
    },
    containedYear: {
      display: "inline-block",
      width: "10%",
      textAlign: "center"
    }
  },
  expandedContainer: {
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    padding: "0 10px"
  }
};

export default Movie;
