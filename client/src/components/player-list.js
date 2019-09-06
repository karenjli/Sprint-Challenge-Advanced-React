import React, { Component } from "react";
import axios from "axios";

//Component
import Player from "./player";

class PlayerList extends Component {
  constructor() {
    super();
    this.state = {
      playerInfo: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ playerInfo: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="playerList">
        {this.state.playerInfo.map(player => (
          <Player
            key={player.id}
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        ))}
      </div>
    );
  }
}

export default PlayerList;
