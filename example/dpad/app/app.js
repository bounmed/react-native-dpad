import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import GenericScreen from './genericScreen';
import BackButton from './backButton';

const AppNavigator = StackNavigator({
    GenericScreen: {
        screen: GenericScreen
    }
}, {
    navigationOptions: ({ navigation, navigationOptions, screenProps }) => ({
        headerLeft: <BackButton navigation={navigation} screenProps={screenProps} />
    })
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigationState: null
        };
    }

    componentDidMount() {
        this.onNavigationStateChange(null, this.refs.appNavigator.state.nav);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.navigationState !== this.state.navigationState;
    }

    onNavigationStateChange = (prevNavigationState, navigationState) => {
        this.setState({ navigationState });
    }

    render() {
        return (
            <AppNavigator
                ref={'appNavigator'}
                screenProps={this.state}
                onNavigationStateChange={this.onNavigationStateChange}
            />
        );
    }

}

export default App;
