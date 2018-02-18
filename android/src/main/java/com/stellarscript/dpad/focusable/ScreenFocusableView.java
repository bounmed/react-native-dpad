package com.stellarscript.dpad.focusable;

import android.content.Context;
import android.view.View;

final class ScreenFocusableView extends FocusableView {

    private View mFocusedView;

    public ScreenFocusableView(final Context context) {
        super(context);
    }

    @Override
    public void setAccessible(final boolean accessible) {
        if (!accessible) {
            mFocusedView = findFocus();
        }

        super.setAccessible(accessible);
        if (accessible) {
            if (mFocusedView != null) {
                mFocusedView.requestFocus();
            }
        }
    }

}
