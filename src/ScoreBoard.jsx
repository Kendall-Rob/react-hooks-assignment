import { useRef, useState } from "react";
//Bootstrap has already been downloaded for you
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
import React from "react";


function ScoreBoard() {
    let [players, setPlayers] = useState([]);
    let inputRef = useRef();

    function addPlayers() {
      let playerInputText = inputRef.current.value || undefined;
      setPlayers([...players, {name: playerInputText, id: Date.now()}]);
    }

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div class="input-group mb-3">
            {/* Modify input so that it is either connected to a ref or some kind of input state */}
            <input
            ref={inputRef}
              type="text"
              class="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              required
            />
            {/* add Add Player event handling to this button */}
            <button
              onClick={addPlayers}
              class="btn btn-outline-primary"
              type="button"
              id="addPlayer"
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-md-4">
              {/* Make sure to pass the unique id as a key */}
              <Player
                key={player.id}
                name={player.name}
                // Anonymous arrow function that we can hold off activating
                // until the user clicks a button inside of the Player component
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;
