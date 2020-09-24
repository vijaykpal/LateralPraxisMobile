import React from 'react';
import {
    View,
    FlatList,
    Image,
    StyleSheet
} from 'react-native';

const DATA = [
    {
        id: 'img1',
        image: require('../asset/fruits1.jpg')
    },
    {
        id: 'img2',
        image: require('../asset/fruits2.jpg')
    },
    {
        id: 'img3',
        image: require('../asset/fruits3.jpg')
    },
    {
        id: 'img4',
        image: require('../asset/fruits2.jpg')
    },
    {
        id: 'img5',
        image: require('../asset/fruits1.jpg')
    },
    {
        id: 'img6',
        image: require('../asset/fruits3.jpg')
    },
    {
        id: 'img7',
        image: require('../asset/fruits2.jpg')
    },
  ];
  
  const Item = ({image }) => (
    <View style={styles.item}>
      <Image source = {image} style = {styles.img} />
    </View>
  );

export const Gallery = () => {

    const renderItem = ({ item }) => (
        <Item image = {item.image} />
      );

    return(
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal = {true}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        marginVertical: 10,
        marginRight: 10,
    },
    img: {
        height: 80, 
        width: 140, 
        borderRadius: 12
    }
  });