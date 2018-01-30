import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import placeImage from './src/assets/beautiful_place.jpg';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: "https://images.freeimages.com/images/thumbs/034/waterfall-1-1203153.jpg"
          }
        })
      };
    })
  }

  deleteItem = (index) => {
    this.setState( prevState => {
      return {
        places: prevState.places.filter( (place) => {
          return place.key !== index;
        })
      }
    });
  }

  onItemPressed = index => {
    this.deleteItem(index)
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  }

  placeDeleteHandler = () => {
    this.deleteItem( this.state.selectedPlace.key );
    this.setState({selectedPlace: null});
  }

  modalClosedHandler = () => {
    this.setState({selectedPlace: null});    
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          onModalClosed={this.modalClosedHandler}
          onItemDeleted={this.placeDeleteHandler}
          selectedPlace={this.state.selectedPlace} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
