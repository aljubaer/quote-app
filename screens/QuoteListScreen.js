import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import firebase, { QUOTE_REF } from '../services/db';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { FloatingAction } from "react-native-floating-action";


export default QuoteListScreen = (props) => {

    const [quoteList, setQuoteList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {

        let quotes = [];

        const onValueChange = 
                firebase.database()
                    .ref(QUOTE_REF)
                    .on('value', snapshot => {
                        setIsLoading(false);
                        snapshot.forEach(element => {
                            quotes.push(element.val());
                        });
                        setQuoteList(quotes);
                        quotes = []
                    });
        

        return () => firebase.database()
                        .ref(QUOTE_REF)
                        .off('value', onValueChange);

    }, []);
    
    if (isLoading) {
        console.log("Loading!!!");
        return  <ActivityIndicator 
                    style={styles.loadingScreen} 
                    size="large" 
                    color="#0000ff" />
    }

    const _renderItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                    props.navigation.navigate("QuoteDetails", {quote: itemData.item})
            }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>
                        {itemData.item.title}
                    </Text>
                </View>
                <View style={styles.quoteContainer}>
                    <Text style={styles.quote} ellipsizeMode='tail' numberOfLines={3}>
                        {itemData.item.quote}
                    </Text>
                </View>
                <View style={styles.refContainer}>
                    <Text style={styles.ref} ellipsizeMode='tail' numberOfLines={1}>
                        {itemData.item.ref}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <>
            <StatusBar />
            <FlatList
                style={styles.screen}
                data={quoteList}
                renderItem={_renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{height: 20, width: 50}}></View>
            <FloatingAction
                showBackground={false}
                animated={false}
                position="center"
                onPressMain={() => {
                    console.log("Called");
                    props.navigation.navigate("CreateQuote");
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        //padding: '2%',
        backgroundColor: '#ededed',
    },
    loadingScreen: {
        margin: '2%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '96%',
        height: 164,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop: 8,
        marginHorizontal: '2%',
        overflow: 'hidden'
    },
    titleContainer: {
        padding: 8,
        width: '100%',
        overflow: "hidden"
    },
    title: {
        textAlign: 'left',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1.4
    },
    quoteContainer: {
        padding: 16,
        paddingTop: 4,
        width: '100%',
        overflow: "hidden",
    },
    quote: {
        textAlign: 'left',
        fontSize: 14,
        color: '#5f5f5f',
        lineHeight: 22,
        letterSpacing: 1.2
    },
    refContainer: {
        padding: 16,
        paddingTop: 0,
        marginTop: 0,
        width: '100%',
        overflow: "hidden",
    },
    ref: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '700',
        color: '#525252',
        lineHeight: 22,
        letterSpacing: 1.2
    },
    
});

