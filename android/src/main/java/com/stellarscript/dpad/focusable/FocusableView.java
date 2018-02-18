package com.stellarscript.dpad.focusable;

import android.content.Context;
import android.view.ViewGroup;

import com.facebook.react.views.view.ReactViewGroup;

class FocusableView extends ReactViewGroup {

    public FocusableView(final Context context) {
        super(context);
    }

    public void setAccessible(final boolean accessible) {
        if (accessible) {
            setDescendantFocusability(ViewGroup.FOCUS_BEFORE_DESCENDANTS);
        } else {
            setDescendantFocusability(ViewGroup.FOCUS_BLOCK_DESCENDANTS);
            clearFocus();
        }
    }

}
