import React, { Component } from 'react';
import './App.css';
import friends from '../src/friends.json';
import Wrapper from "../src/components/Wrapper/Wrapper.js";
import FriendsCard from "../src/components/FriendsCard/FriendsCard.js";

class App extends Component {
  state = {
    images: friends,
    highscore: 0,
    score: 0,
    userImages: [],
    set: new Set([])
  }

  checkGame = (event) => {
    let id = event.target.id;
    let hScore = this.state.highscore;
    this.state.images.sort(() => Math.random() - 0.5);
    if (this.state.set.has(id)) {
      this.setState({
        highscore: this.state.score > hScore ? this.state.score : hScore,
        score: 0
      })
      this.state.set.clear();
    }
    else {
      this.state.set.add(event.target.id);
      this.state.score++;
      this.setState({
        score: this.state.score
      })
    }
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1 >Clicky Game</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <Wrapper>
                {this.state.images.map(friend => (
                  <FriendsCard
                    id={friend.id}
                    image={friend.image}
                    key={friend.id}
                    checkGame={this.checkGame}
                  />
                ))}
              </Wrapper>
            </div>
            <div className="col-sm-3 scoreBoard">
              <div className="scoreCard">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      Highest Score:{this.state.highscore}
                    </div>
                    <div className="col-sm">
                      Score:{this.state.score}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
