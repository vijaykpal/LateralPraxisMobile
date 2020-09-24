import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

import {LightRule} from './HorizontalRule';
import {FormerDetails} from './FormerDetails';
import {About} from './About';

export const Harvest = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.heading}>Harvest stage</Text>

            <View>
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

            <FormerDetails />

            <About />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20
    },
    heading:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
        marginBottom: 35
    }
})