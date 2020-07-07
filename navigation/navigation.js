import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from '@expo/vector-icons';
import QuoteListScreen from '../screens/QuoteListScreen';
import QuoteDetailsScreen from '../screens/QuoteDetailsScreen';
import CreateQuoteScreen from '../screens/CreateQuoteScreen';

const QuoteStack = createStackNavigator();

const QuoteStackScreen = () => (
    <QuoteStack.Navigator>
        <QuoteStack.Screen name="QuoteList" component={QuoteListScreen} />
        <QuoteStack.Screen name="QuoteDetails" component={QuoteDetailsScreen} />
        <QuoteStack.Screen name="CreateQuote" component={CreateQuoteScreen} />
    </QuoteStack.Navigator>
);

export default () => {
    return (
        <NavigationContainer>
            <QuoteStackScreen />
        </NavigationContainer>
    );
}