import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

export default QuoteDetailsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Quote Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});