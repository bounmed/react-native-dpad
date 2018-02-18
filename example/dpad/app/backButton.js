import React from 'react';
import { Text } from 'react-native';
import { NavBarButton } from 'react-native-dpad';

const BackButton = ({ navigation, screenProps }) => (
    <NavBarButton backgroundColor={'green'} routeKey={navigation.state.key} navigationState={screenProps.navigationState} onPress={navigation.goBack}>
        <Text>GO BACK</Text>
    </NavBarButton>
);

export default BackButton;
