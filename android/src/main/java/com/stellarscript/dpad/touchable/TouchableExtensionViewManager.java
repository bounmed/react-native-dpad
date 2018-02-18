package com.stellarscript.dpad.touchable;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

import java.util.HashMap;
import java.util.Map;

final class TouchableExtensionViewManager extends ViewGroupManager<TouchableExtensionView> {

    private static final String REACT_CLASS = "RCT" + TouchableExtensionView.class.getSimpleName();

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        final Map<String, Object> events = new HashMap<>();
        events.put(TouchableExtensionEvents.ON_KEY_PRESSED_EVENT, MapBuilder.of("registrationName", TouchableExtensionEvents.ON_KEY_PRESSED_EVENT));
        return events;
    }

    @Override
    public Map<String, Object> getExportedViewConstants() {
        final Map<String, Object> constants = MapBuilder.newHashMap();
        constants.put("ON_KEY_PRESSED", TouchableExtensionEvents.ON_KEY_PRESSED_EVENT);
        return constants;
    }

    @Override
    protected TouchableExtensionView createViewInstance(final ThemedReactContext themedReactContext) {
        return new TouchableExtensionView(themedReactContext);
    }

}
