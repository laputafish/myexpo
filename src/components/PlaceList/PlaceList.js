import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
  return (
    <FlatList
    style={styles.listContainer}
    data={props.places}
    removeClippedSubviews={true}
    scrollEventThrottle={16}
    renderItem={(info)=>(
      <ListItem
        id={info.item}
        key={info.item.key}
        placeName={info.item.name}
        placeImage={info.item.image}
        onItemPressed={()=>{
          props.onItemSelected(info.item.key);
        }}
      />
    )}
    >
    </FlatList>
  )
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default PlaceList;
