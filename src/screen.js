import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, requireNativeComponent } from 'react-native';
import throttle from 'throttle';
import accessibility from './accessibility';

class Screen extends Component {
    _getInitialState = (props) => {
        return {
            accessible: this.getAccessibility(props)
        };
    }

    _componentWillReceiveProps = (nextProps) => {
        const accessible = this.getAccessibility(nextProps);
        this.setState({ accessible });
    }

    _shouldComponentUpdate = (nextProps, nextState) => {
        return nextState.accessible !== this.state.accessible;
    }

    getAccessibility = (props) => {
        const routeKey = this.routeKey || props.navigation.state.key;
        const accessible = accessibility.getAccessibilityForRouteKey({ navigationState: props.screenProps.navigationState, routeKey });
        return accessible;
    }

    navigateToScreen = throttle((route, args) => {
        if (this.state.accessible) {
            this.props.navigation.navigate(route, args);
        }
    }, 200);

    renderScreenContent() {
        console.warn(`Screen's subclasses must override renderScreenContent method`);
        return null;
    }

    render() {
        return (
            <ScreenFocusableView style={styles.screenContainer} accessible={this.state.accessible}>
                {this.renderScreenContent()}
            </ScreenFocusableView>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1
    }
});

const ScreenFocusableViewInterface = {
    name: 'ScreenFocusableView',
    propTypes: {
        ...View.propTypes
    }
};

const ScreenFocusableView = requireNativeComponent('RCTScreenFocusableView', ScreenFocusableViewInterface);

export default Screen;
