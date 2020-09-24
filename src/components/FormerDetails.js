import React from 'react';
import {
    View, 
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { Avatar } from 'react-native-elements';

import {LightRule} from './HorizontalRule';
import {Gallery} from './Gallery';
import {FruitGoodness} from './FriuitGoodness';

export const FormerDetails = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.heading}>Former details</Text>

            <View style = {styles.main}>
                <Avatar
                    rounded
                    size = {80}
                    source={require('../asset/farmerImg1.jpg')}/>

                <View style = {{marginHorizontal: 20}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Ajay Kumar</Text>
                    <Text style = {{fontSize: 14,  color: 'gray'}}>Ghaziabad, Uttar Pradesh</Text>
                </View>

            </View>

            <View style = {{height: 270, marginVertical: 10}}>
                <Image source = {require('../asset/googleMap.png')} style = {{width: '100%'}} />
            </View>

            <Text style = {[styles.heading, {marginVertical: 20}]}>At collection center</Text>

            <View style = {{marginVertical: 10}}>
                <View style = {{flexDirection: 'row', marginVertical: 5}}>
                    <Text style = {{width: '40%'}}>Product Name</Text>
                    <Text style = {{color:'gray'}}>Papaya</Text>
                </View>

                <LightRule />

                <View style = {{flexDirection: 'row', marginVertical: 5}}>
                    <Text style = {{width: '40%'}}>Product Variety</Text>
                    <Text style = {{color:'gray'}}>Pusa Majesty</Text>
                </View>
            </View>

            <Text style = {[styles.heading, {fontSize: 16, marginBottom: 10}]}>Location</Text>

            <View style = {{height: 270, marginVertical: 10}}>
                <Image source = {require('../asset/googleMap.png')} style = {{width: '100%'}} />
            </View>

            <Gallery />

            <FruitGoodness />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    heading:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
        marginBottom: 35
    },
    main: {
        width: '100%',
        height: 100,
        backgroundColor: '#e8f4f8',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
})