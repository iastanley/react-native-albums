import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = {
    albums: []
  }
  
  componentWillMount() {
    // no need to define fetch - it is build in now?!
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json()) // parse response to json
      .then(data => this.setState({ albums: data }))
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  } 
}

export default AlbumList;
