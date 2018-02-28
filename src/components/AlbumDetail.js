import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <Text>Title: {album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>Artist: {album.artist}</Text>
      </CardSection>
    </Card>
  );
}

export default AlbumDetail;