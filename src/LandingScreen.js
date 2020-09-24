import React from 'react';
import {
    View, 
    Image, 
    ScrollView,
    StyleSheet
} from 'react-native';

import {NutritionFact} from './components/NutritionFact';
import {Harvest} from './components/Harvest';

export const LandingScreen = () => {
    return(
        <View style = {styles.container}>
            <ScrollView>
                <View style = {styles.main}>
                    <Image 
                        source = {require('./asset/fruitsImg.jpg')}
                        style = {styles.image} /> 

                    <NutritionFact />
                    <Harvest />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    main:{
        height: '100%',
        width: "100%",
        alignItems: 'center'
    },
    image:{
        height: 400,
        width: "100%"
    },
    nutritionView:{
        width: '95%',
        height: 500,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 2
    }
})