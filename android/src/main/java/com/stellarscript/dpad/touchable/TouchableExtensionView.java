package com.stellarscript.dpad.touchable;

import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.views.view.ReactViewGroup;

import static android.view.KeyEvent.ACTION_DOWN;

final class TouchableExtensionView extends ReactViewGroup implements View.OnKeyListener {

    private final RCTEventEmitter mEventEmitter;

    public TouchableExtensionView(final ThemedReactContext themedReactContext) {
        super(themedReactContext);
        mEventEmitter = themedReactContext.getJSModule(RCTEventEmitter.class);
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        final ViewGroup parent = (ViewGroup) getParent();
        parent.setFocusable(true);
        parent.setImportantForAccessibility(IMPORTANT_FOR_ACCESSIBILITY_YES);
        parent.setOnKeyListener(TouchableExtensionView.this);
    }

    @Override
    public boolean onKey(final View view, final int keyCode, final KeyEvent keyEvent) {
        if (keyEvent.getAction() == ACTION_DOWN) {
            final WritableMap event = Arguments.createMap();
            event.putInt(TouchableExtensionEvents.ON_KEY_PRESSED_KEY_CODE_PROP, keyCode);
            mEventEmitter.receiveEvent(TouchableExtensionView.this.getId(), TouchableExtensionEvents.ON_KEY_PRESSED_EVENT, event);
        }

        return false;
    }

}
