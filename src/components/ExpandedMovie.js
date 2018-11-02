import React, { Component } from "react";

class ExpandedMovie extends Component {

  render() {
    let containerStyle = this.props.expanded ? styles.container : styles.noDisplay;
    return (
      <div style={containerStyle}>
        <div>
          <img src={this.props.poster} alt={this.props.title + ' poster'} />
        </div>
        <div style={styles.infoContainer}>
          <h3>{this.props.title}</h3>
          <p>{this.props.plot}</p>
          <p>Directed by {this.props.director}</p>
          <p>Starring {this.props.actors}</p>
          <p>Runtime: {this.props.runtime}</p>
          <p>Released: {this.props.released}</p>
          <p>Production Company: {this.props.production}</p>
        </div>
      </div>);
  }
}

const styles = {
  container: {
    display: "flex",
    alignItems: 'space-between',
    justifyItems: 'center',
    padding: '10px 10px',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    borderLeft: '1px solid black',

  },
  noDisplay: {
    display: 'none'
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};

export default ExpandedMovie;
