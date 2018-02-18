import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Touchable, Screen } from 'react-native-dpad';

class GenericScreen extends Screen {
    constructor(props) {
        super(props);

        this.state = Object.assign(this._getInitialState(props), {
            counter: 0
        });
    }

    componentWillReceiveProps(nextProps) {
        this._componentWillReceiveProps(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this._shouldComponentUpdate(nextProps, nextState) ||
            this.state.counter !== nextState.counter;
    }

    renderScreenContent() {
        return (
            <View style={{ flex: 1 }}>

                <Text>Simple touchable: </Text>
                <Touchable
                    backgroundColor={'green'}
                    style={{ width: 100, height: 100, borderWidth:1, borderColor: 'red' }}
                    onPress={() => this.setState({ counter: this.state.counter + 1 })}>
                    <Text>Counter value: {this.state.counter}</Text>
                </Touchable>

                <Text style={{ marginTop: 40 }}>Image touchable: </Text>
                <View style={{ width: 100, height: 100, position: 'relative' }}>
                    <Image
                        style={{ ...StyleSheet.absoluteFillObject, zIndex: 1 }}
                        resizeMode={Image.resizeMode.contain}
                        source={{ uri: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg' }}
                    />

                    <Touchable
                        backgroundColor={'green'}
                        style={{ ...StyleSheet.absoluteFillObject, zIndex: 2 }}
                        onPress={() => this.setState({ counter: this.state.counter + 1 })}>
                        <Text>Image Counter value: {this.state.counter}</Text>
                    </Touchable>
                </View>

                <Text style={{ marginTop: 40 }}>Image touchable 2: </Text>
               
                <Touchable
                    backgroundColor={'green'}
                    style={{ width: 100, height: 100 }}
                    contentStyle={{flex: 1}}
                    onPress={() => this.setState({ counter: this.state.counter + 1 })}>
                    <Image
                        style={{ flex: 1, margin: 5 }}
                        resizeMode={Image.resizeMode.contain}
                        source={{ uri: 'https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg' }}
                    />
                </Touchable>

                <Touchable
                    backgroundColor={'green'}
                    style={{ width: '100%', height: 100, marginTop: 40, borderWidth:1, borderColor: 'red' }}
                    onPress={() => this.navigateToScreen('GenericScreen')}>
                    <Text>NEXT</Text>
                </Touchable>

            </View>
        );
    }

}

GenericScreen.navigationOptions = {
    title: 'GenericScreen'
};

export default GenericScreen;
