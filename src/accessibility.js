const getAccessibilityForRouteKey = ({ navigationState, routeKey } = {}) => {
    if (!navigationState || typeof routeKey !== 'string') {
        return false;
    }

    if (navigationState.key === routeKey) {
        return true;
    }

    if (!Array.isArray(navigationState.routes)) {
        return false;
    }

    const innerNavigationState = navigationState.routes[navigationState.index];
    return getAccessibilityForRouteKey({ navigationState: innerNavigationState, routeKey });
};

export default {
    getAccessibilityForRouteKey
};
