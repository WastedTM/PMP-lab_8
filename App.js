import React from 'react';
import { View } from 'react-native';
import AnimatedWelcomeScreen from "./Welcome";

export default class App extends React.Component{
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AnimatedWelcomeScreen />
            </View>
        );
    }
}