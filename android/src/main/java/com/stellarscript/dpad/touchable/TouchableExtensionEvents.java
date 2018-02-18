package com.stellarscript.dpad.touchable;

final class TouchableExtensionEvents {

    private static final String EVENT_NAME_PREFIX = TouchableExtensionView.class.getSimpleName();

    static final String ON_KEY_PRESSED_EVENT = getFullEventName("onKeyPressed");

    static final String ON_KEY_PRESSED_KEY_CODE_PROP = "keyCode";

    private static String getFullEventName(final String eventName) {
        return EVENT_NAME_PREFIX.concat(eventName);
    }

}
