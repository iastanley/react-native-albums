import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { BUTTON_COLOR } from '../styleConstants';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { 
    headerTextStyle, 
    albumTitleStyle,
    thumbnailImgStyle,
    thumbnailContainerStyle,
    albumImgStyle
   } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{ uri: thumbnail_image }}
            style={thumbnailImgStyle}
          />
        </View>
        <View style={headerTextStyle}>
          <Text style={albumTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={albumImgStyle}
        />
      </CardSection>
      <CardSection>
        <Button 
          btnColor={BUTTON_COLOR}
          onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumTitleStyle: {
    fontSize: 18
  },
  thumbnailImgStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImgStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;