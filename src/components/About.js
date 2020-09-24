import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {DarkRule} from './HorizontalRule';

export const About = () => {
    return(
        <View style = {{marginVertical: 20}}>
            <DarkRule />

            <Text style = {styles.heading}>About Demo Group</Text>

            <Text>Leading the corps division from Demo Group is India's best branded fruit company and a market leader in 
                controlled caltivation and markting of high-quality fruit to domestic and international customers in a socially 
                responsible manner</Text>

            <Text style = {styles.footerText}>We are happy to serve fresh and delicious fruits.</Text>

            <DarkRule />

        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        marginVertical: 15,
        fontSize: 14,
        fontWeight: 'bold'
    },
    footerText:{
        marginTop: 15,
        marginBottom: 40
    }
})