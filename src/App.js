import React, { Component } from 'react';
import './App.css';
import friends from '../src/friends.json';
import Wrapper from "../src/components/Wrapper/Wrapper.js";
import FriendsCard from "../src/components/FriendsCard/FriendsCard.js";

class App extends Component {
  state = {
    friends
  }

  render() {
    return (<Wrapper>
      <h4>Clicky Game</h4>
      <FriendsCard/>
    </Wrapper>);
  }
}

export default App;
