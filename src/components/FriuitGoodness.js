import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export const FruitGoodness = () => {
    return(
        <View>
            <Text style = {styles.heading}>Secret behind your</Text>
            <Text style = {styles.heading}>fruit's goodness</Text>

            <View style = {[styles.content, {marginTop: 15}]}>
                <View style = {styles.imgView}>
                    <Image source = {require('../asset/tractorIcon.png')} style = {styles.image} />
                </View>
                <Text style = {{marginHorizontal: 20}}>Direct from farm</Text>
            </View>

            <View style = {styles.content}>
                <View style = {styles.imgView}>
                    <Image source = {require('../asset/traceIcon.jpg')} style = {styles.image} />
                </View>
                <Text style = {{marginHorizontal: 20}}>Fully traceable</Text>
            </View>

            <View style = {styles.content}>
                <View style = {styles.imgView}>
                    <Image source = {require('../asset/glob.png')} style = {styles.image} />
                </View>
                <Text style = {{marginHorizontal: 20}}>Export quality</Text>
            </View>

            <Text style = {{marginVertical: 20, fontSize: 18, color: '#6B8E23'}}>Delivering with love and care for you to relish</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    heading:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    content:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 5
    },
    imgView:{
        width: 50, 
        height: 50,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50
    }, 
    image:{
        height: 40, 
        width: 40
    }
})