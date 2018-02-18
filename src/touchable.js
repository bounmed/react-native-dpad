import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback as TNF, Platform, StyleSheet, UIManager, requireNativeComponent } from 'react-native';

const ON_PRESS_KEY_CODES = [23, 65, 66];

class Touchable extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.accessible !== this.props.accessible ||
            nextProps.backgroundColor !== this.props.backgroundColor ||
            nextProps.style !== this.props.style ||
            nextProps.contentStyle !== this.props.contentStyle ||
            nextProps.contentContainerStyle !== this.props.contentContainerStyle ||
            nextProps.children !== this.props.children;
    }

    onKeyPressed = (ev) => {
        const { keyCode } = ev.nativeEvent;

        if (ON_PRESS_KEY_CODES.includes(keyCode)) {
            this.onPress();
        }
    }

    onPress = () => {
        if (typeof this.props.onPress === 'function') {
            this.props.onPress();
        }
    }

    onLongPress = () => {
        if (typeof this.props.onLongPress === 'function') {
            this.props.onLongPress();
        }
    }

    render() {
        const tnfBackground = Platform.Version >= 21 ? TNF.Ripple(this.props.backgroundColor) : TNF.SelectableBackground();

        return (
            <FocusableView style={this.props.style} accessible={this.props.accessible}>
                <TNF background={tnfBackground} onPress={this.onPress} onLongPress={this.onLongPress}>
                    <View style={[styles.contentContainer, this.props.contentContainerStyle]}>
                        <TouchableExtensionView style={this.props.contentStyle} {...{ [RCTTouchableExtensionViewConstants.ON_KEY_PRESSED]: this.onKeyPressed }}>
                            {this.props.children}
                        </TouchableExtensionView>
                    </View>
                </TNF>
            </FocusableView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1
    }
});

const RCTTouchableExtensionViewConstants = UIManager.RCTTouchableExtensionView.Constants;
const TouchableExtensionViewInterface = {
    name: 'TouchableExtensionView',
    propTypes: {
        ...View.propTypes,
        [RCTTouchableExtensionViewConstants.ON_KEY_PRESSED]: PropTypes.func
    }
};

const TouchableExtensionView = requireNativeComponent('RCTTouchableExtensionView', TouchableExtensionViewInterface);


const FocusableViewInterface = {
    name: 'FocusableView',
    propTypes: {
        ...View.propTypes
    }
};

const FocusableView = requireNativeComponent('RCTFocusableView', FocusableViewInterface);

Touchable.propTypes = {
    accessible: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    onPress: PropTypes.func,
    onLongPress: PropTypes.func
};
Touchable.defaultProps = {
    accessible: true,
    backgroundColor: 'white'
};

export default Touchable;
