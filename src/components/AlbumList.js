import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

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

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    console.log(this.state.albums);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  } 
}

export default AlbumList;
