import React from 'react';
import PropTypes from 'prop-types';
import Touchable from './touchable';
import accessibility from './accessibility';

const NavBarButton = (props) => {
    const { navigationState, routeKey } = props;
    const accessible = accessibility.getAccessibilityForRouteKey({ navigationState, routeKey });

    return (
        <Touchable {...props} accessible={accessible} />
    );
};

NavBarButton.propTypes = {
    ...Touchable.propTypes,
    routeKey: PropTypes.string.isRequired,
    navigationState: PropTypes.object
};
NavBarButton.defaultProps = {
    ...Touchable.defaultProps
};

export default NavBarButton;
