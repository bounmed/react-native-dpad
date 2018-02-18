package com.stellarscript.dpad.focusable;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

final class ScreenFocusableViewManager extends ViewGroupManager<ScreenFocusableView> {

    private static final String REACT_CLASS = "RCT" + ScreenFocusableView.class.getSimpleName();
    private static final String PROP_ACCESSIBLE = "accessible";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ScreenFocusableView createViewInstance(final ThemedReactContext themedReactContext) {
        return new ScreenFocusableView(themedReactContext);
    }

    @ReactProp(name = PROP_ACCESSIBLE)
    public void setAccessible(final ScreenFocusableView focusableView, final boolean accessible) {
        focusableView.setAccessible(accessible);
    }

}
