import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Button
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { createQuote } from '../services/db';

export default CreateQuoteScreen = (props) => {
    const [title, onChangeTitle] = React.useState('');
    const [quote, onChangeQuote] = React.useState('');
    const [ref, onChangeRef] = React.useState('');

    const isValidQuote = () => {
        return (title.trim().length > 0 
            && quote.trim().length > 0
            && ref.trim().length > 0);
    }

    const onSubmitHandler = () => {

        if (isValidQuote())
            createQuote({title, quote, ref});
        props.navigation.navigate("QuoteList");
    }

    return (
        <View style={styles.screen}>
            <View style={styles.inputTitleContainer}>
                <Text style={styles.inputTitleLabel}>
                    Input a title
                </Text>
                <TextInput 
                    onChangeText={text => {onChangeTitle(text)}}
                    style={styles.inputTitle}
                />
            </View>

            <View style={styles.inputTitleContainer}>
                <Text style={styles.inputTitleLabel}>
                    Quote
                </Text>
                <TextInput 
                    style={styles.inputQuote}
                    multiline
                    numberOfLines={4}
                    onChangeText={text => {onChangeQuote(text)}}
                />
            </View>

            <View style={styles.inputTitleContainer}>
                <Text style={styles.inputTitleLabel}>
                    Reference
                </Text>
                <TextInput 
                    style={styles.inputTitle}
                    onChangeText={text => {onChangeRef(text)}}
                />
            </View>

            <TouchableOpacity 
                style={styles.button} 
                title="Done"
                onPress={() => {onSubmitHandler()}}
                >
                <Text style={styles.buttonText}>DONE</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: '2%',
        backgroundColor: '#ededed'
    },
    inputTitleContainer: {
        margin: 2
    },
    inputTitleLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222222'
    },
    inputTitle: {
        height: 48,
        padding: 8,
        fontSize: 16,
        fontWeight: '600',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4
    },
    inputQuote: {
        padding: 8,
        fontSize: 16,
        fontWeight: '600',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        textAlignVertical: 'top',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        height: 48,
        margin: 8,
        marginTop: 48,
        borderRadius: 4,
        backgroundColor:"#1b0094",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    }
});