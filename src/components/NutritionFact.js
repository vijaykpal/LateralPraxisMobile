import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

import {DarkRule, LightRule} from './HorizontalRule';

export const NutritionFact = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.heading}>Nutrition Fact</Text>

            <View style = {styles.section}>
                <Text style = {styles.subHeading}>Serving size</Text>
                <Text style = {{color: 'black'}}>100 g</Text>
            </View>

            <DarkRule />

            <Text style = {styles.subHeading}>Amount per serving</Text>

            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style = {[styles.heading, {fontSize: 30}]}>Calories</Text>
                <Text style = {[styles.heading, {fontSize: 20}]}>89</Text>
            </View>

            <DarkRule />

            <View style = {{flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>% Daily value *</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {styles.subHeading}>Total fat 0.3g</Text>
                <Text style = {{color: '#000'}}>0%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>   Saturated fat 0.1g</Text>
                <Text style = {{color: '#000'}}>0%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {styles.subHeading}>Sodium 1mg</Text>
                <Text style = {{color: '#000'}}>0%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {styles.subHeading}>Total carbohydrate 23gm</Text>
                <Text style = {{color: '#000'}}>8%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>   Dietary fiber 2.1g</Text>
                <Text style = {{color: '#000'}}>9%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>   Sugar 12g</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {styles.subHeading}>Protien 1.1g</Text>
                <Text style = {{color: '#000'}}>2%</Text>
            </View>

            <DarkRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>Vitamin D 0.00mcg</Text>
                <Text style = {{color: '#000'}}>0%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>Calcium 5.00mg</Text>
                <Text style = {{color: '#000'}}>0%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>Iron 0.26mg</Text>
                <Text style = {{color: '#000'}}>1%</Text>
            </View>

            <LightRule />

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5}}>
                <Text style = {{color: '#000'}}>Potassium 358mg</Text>
                <Text style = {{color: '#000'}}>8%</Text>
            </View>

            <DarkRule />

            <Text style = {{color: '#000',marginVertical: 5}}>Some text here....</Text>
        
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: 550,
        marginTop: 2,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    section: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10
    },
    subHeading: {
        color: '#000',
        fontWeight: 'bold'
    }
})